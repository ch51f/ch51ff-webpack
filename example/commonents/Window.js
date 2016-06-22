import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Window from '../../common/window/Window';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		let that = this;
		this.state = {
			title : "标题",
			showTitle: true,
			showFooter: true,
			modal: true,
			buttons: [{
				type: 'normal',
				text: '确定',
				onClick: function() {
					that.refs.window.close();
				}
			}]
		}
	}

	componentDidMount() {
	}

	_show() {
		this.refs.window.open();
	}

	_hide() {
		this.refs.window.close();
	}

	render() {
		let {title, showTitle, showFooter, modal, buttons} = this.state;
		return (
			<div>
				<div className="test-control">
					<p><button onClick={this._show.bind(this)}>show</button> <button onClick={this._hide.bind(this)}>hide</button></p>
				</div>
				<div className="test-show">
					<Window ref="window" title={title} showTitle={showTitle} showFooter={showFooter} modal={modal} buttons={buttons}>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
						<p>test</p>
					</Window>
				</div>
			</div>
		)
	}
}
export default Example;