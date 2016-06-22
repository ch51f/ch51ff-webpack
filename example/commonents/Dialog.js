import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Dialog from '../../common/dialog/Dialog';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			title: "",
			children: "弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息弹出消息",
			buttons: [{
				type: 'primary',
				text: "确定",
				onClick: function() {
				}
			}, {
				type: 'normal',
				text: "取消",
				onClick: function() {
				}
			}],
		}
	}

	_show() {
		this.refs.alert.show()
	}
	_hide() {
		this.refs.alert.hide()
	}

	render() {
		let {title, children, buttons} = this.state
		return (
			<div>
				<div className="test-control">
					<p><button onClick={this._show.bind(this)}>show</button> <button onClick={this._hide.bind(this)}>hide</button></p>
				</div>
				<div className="test-show test-one">
					{this.state.title == "" ?
						<Dialog ref="alert" children={children} buttons={buttons} /> :
						<Dialog ref="alert" title={title} children={children} buttons={buttons} />
					}
				</div>
			</div>
		)
	}
}
export default Example;