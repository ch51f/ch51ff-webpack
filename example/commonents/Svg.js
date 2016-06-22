import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import ArrowRight from '../../common/svg/ArrowRight';
import Contact from '../../common/svg/Contact';
import Shield from '../../common/svg/Shield';

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
						<div><Contact /></div>
						<p>通讯录</p>
					</li>
					<li>
						<div><Shield /></div>
						<p>盾牌</p>
					</li>
				</ul>
			</div>
		)
	}
}
export default Svg;