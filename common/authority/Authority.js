/**
 * @description 没有权限页面
 * @params txt  	提示内容 默认 "您没有权限访问该页面，请与管理员联系"
 * @params mobile 	显示电话 默认 ""
 */

import React, {Component, PropTypes} from 'react';

import Shield from '../svg/Shield';

class Authority extends Component {
	constructor(props,context) {
		super(props,context);
	}

	render() {
		let txt = this.props.txt,
			mobile = this.props.mobile;
		return (
			<section className="authority">
				<div className="con">
					<i className="img"><Shield size="80" color="#ff5a5e" /></i>
					<p className="txt">{txt}</p>
					{mobile != "" ? <p className="mobile">电话：<a href="tel:{mobile}">{mobile}</a></p> : null}
				</div>
			</section>
		);
	}
}

Authority.propTypes = {
	txt: PropTypes.string.isRequired,
	mobile: PropTypes.string.isRequired
}

Authority.defaultProps = {
	txt: '您没有权限访问该页面，请与管理员联系',
	mobile: ""
}

export default Authority;