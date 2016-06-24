import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {ArrowRight, Card, Contact, Deal, Edit, Edit_1, Grow, ListIcon, Phone, Point, Shield, User, Work} from '../../common/svg';


class Svg extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {}
	}
	render() {
		return (
			<div>
				<ul className="svg-list">
					<li>
						<div><ArrowRight /></div>
						<p>向右箭头</p>
					</li>
					<li>
						<div><Card /></div>
						<p>卡片</p>
					</li>
					<li>
						<div><Contact /></div>
						<p>通讯录</p>
					</li>
					<li>
						<div><Deal /></div>
						<p>交易</p>
					</li>
					<li>
						<div><Edit /></div>
						<p>编辑</p>
					</li>
					<li>
						<div><Edit_1 /></div>
						<p>编辑</p>
					</li>
					<li>
						<div><Grow /></div>
						<p>成长</p>
					</li>
					<li>
						<div><ListIcon /></div>
						<p>图标</p>
					</li>
					<li>
						<div><Phone /></div>
						<p>电话</p>
					</li>
					<li>
						<div><Point /></div>
						<p>积分</p>
					</li>
					<li>
						<div><Shield /></div>
						<p>盾牌</p>
					</li>
					<li>
						<div><User /></div>
						<p>用户</p>
					</li>
					<li>
						<div><Work /></div>
						<p>工作</p>
					</li>
				</ul>
			</div>
		)
	}
}
export default Svg;