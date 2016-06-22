import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import QuickList from '../../common/quicklist/QuickList';
import HomeStore from '../store/HomeStore';

class Home extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			list: HomeStore.getList()
		}
	}
	render() {
		let {list} = this.state
		return (
			<div>
				<QuickList list={list} isLink={true} />
			</div>
		)
	}
}
export default Home;