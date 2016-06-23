/**
 * @description 弹出信息提示框
 */
import React, {Component, PropTypes} from 'react';
import ClassName from 'classnames';

import Mask from '../mask/Mask';

class Dialog extends React.Component{
	constructor(props, context) {
		super(props, context);
	}


	_renderButtons() {
		const {buttons} = this.props;
		return buttons.map((item,idx) => {
			const {text, type, onClick} = item;
			const clsName = ClassName({
				default_dialog_btn: true,
				normal_btn: type === 'normal',
				thin_xr_line: type === 'normal',
				primary_btn: type === 'primary',
				clear_bg: true,
				flex: true,
				primary_btn_single: buttons.length == 1
			});
			return (
				<button key={idx} onClick={onClick} className={clsName}>{text}</button>
			);
		});
	};

	render() {
		const {title, children, isShow} = this.props;
		return(
			<section className='dialog-container' style={{display:isShow?'block':'none'}}>
				<Mask />
				<article className='dialog-body'>
					<div className='dialog-wrapper'>
						<header className='dialog-title'>{title}</header>
						<div className='dialog-message'>{children}</div>
						<footer className='dialog-footer thin-ty-line'>
							<div className='dialog-btn-panel'>
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
	isShow: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.string,
	buttons: PropTypes.array.isRequired
}


Dialog.defaultProps = {
	isShow: false,
	title: '系统提示',
	buttons: []
}

export default Dialog;