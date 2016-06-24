import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {ScrollView, Column} from '../../common/scrollview/ScrollView';

let cloumn = {
	name: 'fch',
	age: 27,
	sex: 'male',
	address: 'china',
	mobile: '18687519752',
	mobile1: '18687519752',
	mobile2: '18687519752',
	mobile3: '18687519752',
	mobile4: '18687519752',
	mobile5: '18687519752',
	mobile6: '18687519752',
	mobile7: '18687519752',
	mobile8: '18687519752',
}

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {}
	}
	componentDidMount() {}

	componentWillUnmount() {}
	
	render() {
		let data = [];
		for(var i =1; i <= 20; i++) {
			cloumn.fir = i;
			data.push(cloumn);
		}
		return (
			<div className="aaa">
				<ScrollView store={data} keyWord="fir" height={500} columns={3} topLeft={"测试"}>
					<Column name='name' text="姓名" />
					<Column name='age' text="年龄" />
					<Column name='sex' text="性别" />
					<Column name='address' text="地址" />
					<Column name='mobile' text="电话" />
					<Column name='mobile1' text="电话1" />
					<Column name='mobile2' text="电话2" />
					<Column name='mobile3' text="电话3" />
					<Column name='mobile4' text="电话4" />
					<Column name='mobile5' text="电话5" />
					<Column name='mobile6' text="电话6" />
					<Column name='mobile7' text="电话7" />
					<Column name='mobile8' text="电话8" />
				</ScrollView>
			</div>
		);
	}
}
export default Example;