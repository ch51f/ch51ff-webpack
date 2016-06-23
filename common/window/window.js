/**
 * @description 弹出层组件
 */
import React from 'react';
import className from 'classnames';
import '../base.less';
import './window.less';
import Mask from '../mask/Mask';
'use strict';
class WindowDialog extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	};

	//打开
	open() {
		let {watermark} = this.props;
		if(watermark) {
			let body = document.getElementsByTagName('body')[0];
			let el = this.refs.w
			el.style.backgroundImage = body.style.backgroundImage;
		}
		this.setState({
			isOpen: true
		});
	};

	//关闭
	close() {
		this.setState({
			isOpen: false
		});
	}

	//创建按钮
	_renderButtons() {
		if(this.props.buttons.length <= 0) return;
		return this.props.buttons.map((item,index)=>{
			const {text, type, onClick} = item;
			let cls = className({
				'window-btn': true,
				'window-normal-btn': type === 'normal',
				'window-primary-btn': type === 'primary'
			});
			return (
				<button key={index} className={cls} onclick={onClick}>{text}</button>
			)
		});
	} 

	render() {
		let {title, modal, showTitle, showFooter, children, theme} = this.props;
		theme = theme ? theme : 'A';
		let buttonCls = className({
			'window-btn-pos': theme === 'A',
			'window-btn-block': theme === 'B',
		});
		return (
			<section className='window-container' style={{display:this.state.isOpen?'block':'none'}}>
				<Mask isShow={modal} />
				<article className='window-content box box-center'>
					<div ref="w" className='window-body flex'>
						<header style={{display:showTitle?'block':'none'}} className='window-header thin-by-line'>{title}</header>
						<div className='window-child-html'>{children}</div>
						<footer style={{display:showFooter?'block':'none'}} className='window-footer thin-ty-line'>
							<div className={buttonCls}>
								{this._renderButtons()}
							</div>
						</footer>
					</div>
				</article>
			</section>
		)
	}
}

WindowDialog.propTypes = {
	title: React.PropTypes.string,
	showTitle: React.PropTypes.bool,
	showFooter: React.PropTypes.bool,
	modal: React.PropTypes.bool,
	buttons: React.PropTypes.array
};

WindowDialog.defaultProps = {
	title: '系统弹窗',
	showTitle: true,
	showFooter: true,
	modal: true,
	buttons: []
};

export default WindowDialog;