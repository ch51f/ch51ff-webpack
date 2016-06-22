import React, {Component} from 'react';

import Button from '../../common/button/Button';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
	}
	_click() {
		alert("this is click")
	}
	render() {
		return (
			<div className="page">
				<h4>默认</h4>
				<div>
					<Button>test</Button>
					<Button type="info">test</Button>
					<Button type="primary">test</Button>
					<Button type="warning">test</Button>
					<Button type="danger">test</Button>
					<Button type="emphasize">test</Button>
					<Button type="emphasize" disabled={true}>disabled</Button>
				</div>
				<h4>块按钮</h4>
				<div>
					<Button block={true}>test</Button>
					<Button block={true} type="info">test</Button>
					<Button block={true} type="primary">test</Button>
					<Button block={true} type="warning">test</Button>
					<Button block={true} type="danger">test</Button>
					<Button block={true} type="emphasize">test</Button>
					<Button block={true} type="emphasize" disabled={true}>disabled</Button>
				</div>
				<h4>功能</h4>
				<div>
					<Button block={true} handler={this._click.bind(this)}>click</Button>
					<Button block={true} url="/">link</Button>

				</div>
			</div>
		)
	}
}
export default Example;