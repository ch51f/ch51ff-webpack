/**
 * @description ajax数据请求
 */
'use strict';
class DoAjax{
	constructor(params) {
		this.GLOBAL_XHR = null;
		//初始化配置
		this.config = {
			//请求地址
			url:'',
			//参数
			data:{},
			//超时时间15秒
			timeout:15000,
			//请求的类型
			type:'post',
			//是否异步
			async:true,
			//ajax请求之前执行
			beforeSend() {},
			//ajax请求成功
			success(res) {},
			//aqjax请求完成
			complete() {},
			//ajax请求失败或错误
			error(msg) {}
		};
		this._extendParams(params,this.config);
		const {url,type,data,async} = this.config;
		this._initXMLHttp((xhr)=>{
			try{
				if(xhr == null){
					throw 'No XHR object available';
				}
				this.GLOBAL_XHR = xhr;
				this._doAction(url,type,data,async);
			}catch(err){
				this.config.error(err);
			}
		});
	};

	//Post请求
	_post(url,data,async) {
		let params = this._groupParams(data);
		this.GLOBAL_XHR.open('POST',url,async);
		this.GLOBAL_XHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gbk;");
		this.GLOBAL_XHR.send(params);
		this._ajaxRequest();
	};

	//Get请求
	_get(url,data,async) {
		let params = this._groupParams(data);
		this.GLOBAL_XHR.open('GET',url + '?' + params,async);
		this._ajaxRequest();
		this.GLOBAL_XHR.send(null);
	};

	//执行ajax请求
	_ajaxRequest() {
		this.config.beforeSend();
		let isTimeOut = false;
		let timeOutFlag = null;
		//绑定onreadystatechange处理器
		this.GLOBAL_XHR.onreadystatechange = (res)=> {
			if(this.GLOBAL_XHR.readyState == 4 && !isTimeOut){
				clearTimeout(timeOutFlag);
				if(this.GLOBAL_XHR.status == 200){
					let result = JSON.parse(res.currentTarget.responseText);
					this.config.success(result);
				}else{
					this.config.error('未知错误');
				}
				this.config.complete();
				//清除绑定
				setTimeout(()=>{
					this.GLOBAL_XHR.onreadystatechange = null;
					if(this.config.async)
						this.GLOBAL_XHR = null;
				},0);
			}
		}
		//超时检测
		timeOutFlag = setTimeout(()=>{
			isTimeOut = true;
			clearTimeout(timeOutFlag);
			this.config.error('请求超时');
			this.config.complete();
		},this.config.timeout);
	};

	//参数合并
	_extendParams(params,source) {
		for(var key in params){
			if(params[key]){
				source[key] = params[key];
			}
		}
	};

	//根据类型进行相应的请求
	_doAction(url,type,data,async) {
		if(url == '' || url == null){
			this.config.error('url error!');
			return;
		}
		// if(typeof data != 'object' || data == null || data == ''){
		// 	this.config.error('params error!');
		// 	return;
		// }
		if(type === 'post'){
			this._post(url,data,async);
		}else if(type == 'get'){
			this._get(url,data,async);
		}else{
			this.config.error('type is not allowed');
		}
	}	

	//初始化检测XMLHttpRequest
	_initXMLHttp(callback) {
		let XHR = null;
		if(window.XMLHttpRequest){
			XHR = new XMLHttpRequest();
		}else{
			if(window.ActiveXObject){
				if(arguments.callee.activeXString != 'string'){
					let msHttp = ['MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];
					msHttp.map((msx)=>{
						try{
							new ActiveXObject(msx);
							arguments.callee.activeXString = msx;
						}catch(ex){
							throw new Error('ActiveXObjext not found');
						}
					})
					XHR = new ActiveXObject(arguments.callee.activeXString);
				}
			}
		}
		callback(XHR);
	};

	//参数组合
	_groupParams(params) {
		let paramStr = [];
		for(var p in params){
			paramStr.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
		}
		return paramStr.join('&');
	};
}

//要公开的接口方法
function Ajax(options){
	return new DoAjax(options);
}
export default Ajax;