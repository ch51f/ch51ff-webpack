/**
 * @description  焦点图轮播
 * @author  zyh
 * @date  2016-05-12
 */
import React from 'react';
import ClassNames from 'classnames';
import '../base.less';
import './focusmap.less';
import ClassCore from '../utils/ClassCore';
import ReactDom from 'react-dom';
let me = null;
class FocusMapView extends React.Component{
	constructor(props) {
		super(props);
		me = this;
		this.mapCount = 0;
		this.startX = 0;
		this.endX = 0;
		this.timer = null;
		this.scrollWrapper = null;
		this.mapWidth = 0;
		this.imgArr = [];
		this.curIndex = 0;
		this.maxWidth = 0;
		this.state = {
			showLoading: true
		}
	};

	//render img map view
	_renderMapImgView() {
		this.imgArr = [];
		return React.Children.map(this.props.children, (item,index)=>{
			this.imgArr.push(item.props.imgUrl);
			return (
				item
			)
		});
	};

	//component before
	componentWillMount() {
		this.mapCount = React.Children.count(this.props.children);
	};

	//component load
	componentDidMount() {
		this.mapWidth = this.refs.mapContainer.offsetWidth;
		this.scrollWrapper = this.refs.scrollWrapper;
		this.maxWidth = this.mapWidth * this.mapCount;
		this.scrollWrapper.style.width = this.maxWidth + 'px';
		this._loadImg();
		this._addEvent(this.scrollWrapper,'touchstart',this._touchStart);
		ClassCore.addClass(this.scrollWrapper,'focus-map-easy');
	};

	//component leave
	componentWillUnmount() {
		this._removeDomEvt();
	};

	//touch start
	_touchStart(e) {
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		me._stopTimer();
		me.startX = touch.pageX;
		me._addEvent(me.scrollWrapper,'touchmove',me._touchMove);
		me._addEvent(me.scrollWrapper,'touchend',me._touchEnd);
	};

	//touch move
	_touchMove(e) {
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		me.endX = touch.pageX - me.startX;
		let _sLeft = -me.curIndex * me.mapWidth + me.endX;
		let maxW = -(me.mapCount - 1) * me.mapWidth;
		if(me.endX < 0){
			_sLeft = Math.max(_sLeft,maxW);
			
		}else{
			_sLeft = Math.min(0,_sLeft);
		}
		ClassCore.removeClass(me.scrollWrapper,'focus-map-easy');
		me.scrollWrapper.style.left = _sLeft + 'px';
	};

	//touch end
	_touchEnd(e) {
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		if(me.endX >= 100){
			if(me.curIndex !=0) me.curIndex --;
		}else if(me.endX <= -100){
			if(me.curIndex != me.mapCount - 1) me.curIndex++;
		}
		ClassCore.addClass(me.scrollWrapper,'focus-map-easy');
		me._focusMapChange();
		me._removeDomEvt();
		me._startTimer();
	};

	//移除Dom事件
	_removeDomEvt() {
		me._removeEvent(me.scrollWrapper,'touchmove', me._touchMove);
		me._removeEvent(me.scrollWrapper,'touchend', me._touchEnd);
	};

	//焦点图切换
	_focusMapChange() {
		FoucsMapIndex._setCurrentIndex(this.curIndex);
		let _scrWidth = -this.curIndex * this.mapWidth;
		this.scrollWrapper.style.left = _scrWidth + 'px';
	}

	//加载焦点图片
	_loadImg() {
		if(this.imgArr.length <= 0){
			this.setState({
				showLoading: false
			});
			this._startTimer();
			return;
		}
		let url = this.imgArr[0];
		let img = new Image();
		img.src = url;
		if(img.complete){
			this.imgArr.shift();
			this._loadImg();
			return;
		};
		img.onload = ()=>{
			me.imgArr.shift();
			me._loadImg();
		};
	};

	//启动定时器焦点图自动切换
	_startTimer() {
		this._stopTimer();
		this.timer = setInterval(function(){
			me.curIndex ++;
			if(me.curIndex == me.mapCount){
				me.curIndex = 0;
			}
			me._focusMapChange();
		},this.props.speed);
	};

	//关闭定时器
	_stopTimer() {
		clearInterval(this.timer);
	};

	/**
	 * [绑定事件]
	 * @param  {[type]} target   [目标对象]
	 * @param  {[type]} evtName  [事件名]
	 * @param  {[type]} func     [绑定函数]
	 */
	_addEvent(target, evtName, func) {
		if(target.addEventListener){
			target.addEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.attachEvent('on' + evtName,func);
		}else{
			target['on' + evtName] = func;
		}
	};

	/**
	 * [移除事件]
	 * @param  {[type]} target   [目标对象]
	 * @param  {[type]} evtName  [事件名]
	 * @param  {[type]} func     [要移除的函数]
	 */
	_removeEvent(target, evtName, func) {
		if(target.addEventListener){
			target.removeEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.detachEvent('on' + evtName,func);
		}else{
			delete target['on' + evtName];
		}
	}

	render() {
		return (
			<div ref='mapContainer' style={{height:this.props.height}} className='focus-map-container'>
				<div style={{display:this.state.showLoading?'block':'none'}} className='focus-map-loading'>
					<div className='box box-center map-loading-content'>正在加载图片...</div>
				</div>
				<div ref='scrollWrapper' className='box focus-map-scroll'>
					{this._renderMapImgView()}
				</div>
				<div className='box box-center focus-index-wrapper'>
					<FoucsMapIndex child={this.props.children} />
				</div>
			</div>
		)
	}
}

//事件处理器
	FocusMapView.events = {
		handlerEvent: (e)=>{
			e = e?e:window.event;
			switch(e.type){
				case 'touchstart':
					break;
				case 'touchmove':
					break;
				case 'touchend':
					break;
				default:
					break;
			}
		}
	};

FocusMapView.propTypes = {
		speed: React.PropTypes.number,
		height: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		])
	};

FocusMapView.defaultProps = {
		speed: 4000,
		height: ''
	};

/**
 * @description [焦点图下标]
 */
let mapIndex = null;
class FoucsMapIndex extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			curIndex: 0
		}
		mapIndex = this;
	};

	//render index view
	_renderMapIndexView() {
		return React.Children.map(this.props.child,(item,index)=>{
			let clsName = ClassNames({
				'map-index-sty': true,
				'active-index-sty': index == this.state.curIndex
			});
			return (
				<span className={clsName}></span>
			)
		})
	};

	//set current mapindex
	static _setCurrentIndex(index) {
		mapIndex.setState({
			curIndex: index
		});
	};

	render() {
		return (
			<div className='map-index-pos'>
				{this._renderMapIndexView()}
			</div>
		)
	}
}

/**
 * @description [焦点图片区域]
 */
let mapPanel = null;
class MapItem extends React.Component{
	constructor(props) {
		super(props);
		mapPanel = this;
	};
	//focus img pos
	setFocusPos(index){
		mapPanel.setState({
			zIndex: index
		});
	};
	render() {
		const {imgUrl} = this.props;
		return(
			<div style={{background:'url('+imgUrl+') no-repeat center 0',
				'backgroundSize':'cover'}}
				className='flex focus-map-item'>
				{this.props.children}
			</div>
		)
	}
}
export {FocusMapView, MapItem};