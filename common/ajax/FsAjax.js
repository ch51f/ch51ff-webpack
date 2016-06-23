/**
 * @description ajax封装
 */
import Ajax from './Ajax.js';

let get = function(url, success, error, before, complete) {
	Ajax({
		url: url,
		type: 'get',
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			success(res);
		},
		error: function(err) {
			alert(err);
		}
	})
}

let post = function(url, data, success, error, before, complete) {
	Ajax({
		url: url,
		data: data,
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			success(res);
		},
		error: function(err) {
			alert(err);
		}
	})
}

let fs_ajax = function(url, data, login_url, before, complete, cb) {
	cb = arguments[arguments.length - 1]
	complete = arguments[arguments.length - 2]
	before = arguments[arguments.length - 3]
	Ajax({
		url: url,
		data: data,
		beforeSend: function() {
			before();
		},
		complete: function() {
			complete();
		},
		success: function(res) {
			if(res.result) {
				cb(res.data, res);
			} else {
				if(res.errorcode == null) {
					alert("输出格式错误");
					return;
				}
				if(res.errorcode == -1) {
					alert("系统维护");
				} else if (res.errorcode == -2 || res.errorcode == 1) {
					if(typeof login_url == "string") {
						fs_ajax(login_url, {url: location.href}, function(res) {
							location.href = res;
						})
					} else {
						// alert("请先登陆")
					}
				} else if (res.errorcode == 0) {
					alert(res.data);
				} else if (res.errorcode == 2) {
					cb(false, res);
				} else {
					cb(res.data, res);
				}
			}
		},
		error: function(err) {
			alert(err);
		}
	})
}

exports.fs_ajax = fs_ajax;
exports.get = get;
exports.post = post;