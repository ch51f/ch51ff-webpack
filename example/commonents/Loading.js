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
		this.refs.loading.show();
	}

	render() {
		let {isShow} = this.state;
		return (
			<div>
				<Loading ref="loading" />
			</div>
		)
	}
}
export default Example;