import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Tips from '../../common/tips/Tips';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		let that = this;
		this.state = {
			show: false
		}
	}

	componentDidMount() {
	}

	_show() {
		this.setState({
			show: true
		});
	}

	render() {
		let {show} = this.state;
		return (
			<div>
				<div className="test-control">
					<p><button onClick={this._show.bind(this)}>show</button></p>
				</div>
				<div className="test-show">
					<Tips isShow={show}>
						testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
					</Tips>
				</div>
			</div>
		)
	}
}
export default Example;