import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Dialog from '../../common/dialog/Dialog';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			title: "",
			children: "弹出消息",
			isShow: false,
			buttons: [{
				type: 'primary',
				text: "确定",
				onClick: this._hide.bind(this)
			}, {
				type: 'normal',
				text: "取消",
				onClick: this._hide.bind(this)
			}],
		}
	}

	_show() {
		this.setState({isShow: true});
	}
	_hide() {
		this.setState({isShow: false});
	}

	render() {
		let {title, children, buttons, isShow} = this.state
		return (
			<div>
				<div className="test-control">
					<p><button onClick={this._show.bind(this)}>show</button> <button onClick={this._hide.bind(this)}>hide</button></p>
				</div>
				<div className="test-show test-one">
					{this.state.title == "" ?
						<Dialog isShow={isShow} children={children} buttons={buttons} /> :
						<Dialog isShow={isShow} title={title} children={children} buttons={buttons} />
					}
				</div>
			</div>
		)
	}
}
export default Example;