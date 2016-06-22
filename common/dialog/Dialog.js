/**
 * @description 弹出信息提示框
 */
import React, {Component, PropTypes} from 'react';
import Mask from '../mask/Mask';
import ClassName from 'classnames';
'use strict';
let me = null;
class Dialog extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isShow:false
		}
		me = this;
	}

	//打开弹窗
	show() {
		me.setState({
			isShow:true
		});
	}

	//关闭弹窗
	hide() {
		me.setState({
			isShow:false
		});
	}

	//按钮事件
	_btnHandler(fn) {
		fn();
		me.hide();
	}

	//显示按钮设置
	_renderButtons() {
		return this.props.buttons.map((item,idx) => {
			const {text, type, onClick} = item;
			let clsName = 'default_dialog_btn';
			if(typeof type != 'undefined'){
				clsName = ClassName({
					default_dialog_btn: true,
					normal_btn: type === 'normal',
					thin_xr_line: type === 'normal',
					primary_btn: type === 'primary',
					clear_bg: true,
					flex: true,
					primary_btn_single: this.props.buttons.length == 1
				});
			}
			return (
				<button key={idx} onClick={this._btnHandler.bind(this,onClick)} className={clsName}>{text}</button>
			);
		});
	};

	render() {
		const {title, children} = this.props;
		return(
			<section className='dialog-container' style={{display:this.state.isShow?'block':'none'}}>
				<Mask />
				<article className='dialog-body box box-center'>
					<div className='dialog-wrapper flex'>
						<header className='dialog-title'>{title}</header>
						<div className='dialog-message'>{children}</div>
						<footer className='dialog-footer thin-ty-line'>
							<div className='dialog-btn-panel box'>
								{this._renderButtons()}
							</div>
						</footer>
					</div>
				</article>
			</section>
		);
	};
}

Dialog.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}


Dialog.defaultProps = {
	title: '系统提示',
	buttons: []
}

export default Dialog;