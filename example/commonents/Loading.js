import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Loading from '../../common/loading/Loading';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			isShow : true
		}
	}

	componentDidMount() {
	}

	render() {
		let {isShow} = this.state;
		return (
			<div>
				<Loading ref="loading" isShow={isShow} />
			</div>
		)
	}
}
export default Example;