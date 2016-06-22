import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {TabView, TabPanel} from '../../common/tab/Tab';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		let that = this;
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<TabView>
					<TabPanel title="panel1">panel1</TabPanel>
					<TabPanel title="panel2">panel2</TabPanel>
					<TabPanel title="panel3">panel3</TabPanel>
				</TabView>
			</div>
		)
	}
}
export default Example;