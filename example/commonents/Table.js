import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {Tabel, Column} from '../../common/table/Table';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		let that = this;
		this.state = {
		}
	}

	componentDidMount() {
	}

	// _show() {
	// 	this.refs.tooltip.show();
	// }

	render() {
		return (
			<div>
				<Tabel store={[{a:1,b:2}, {a:1,b:2}, {a:1,b:2}, {a:1,b:2}]}>
					<Column title="列1" name="a" />
					<Column title="列2" name="b" />
				</Tabel>
			</div>
		)
	}
}
export default Example;