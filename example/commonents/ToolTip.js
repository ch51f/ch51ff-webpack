import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import ToolTip from '../../common/tooltip/ToolTip';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		let that = this;
		this.state = {
		}
	}

	componentDidMount() {
	}

	_show() {
		this.refs.tooltip.show();
	}

	render() {
		return (
			<div>
				<div className="test-control">
					<p><button onClick={this._show.bind(this)}>show</button></p>
				</div>
				<div className="test-show">
					<ToolTip ref="tooltip">
						testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
					</ToolTip>
				</div>
			</div>
		)
	}
}
export default Example;