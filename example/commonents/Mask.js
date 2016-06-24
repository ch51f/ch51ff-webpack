import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Mask from '../../common/mask/Mask';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			isShow : true
		}
	}

	render() {
		let {isShow} = this.state;
		return (
			<div>
				<h4>title</h4>
				<div>Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content </div>
				<Mask isShow={isShow} />
			</div>
		)
	}
}
export default Example;