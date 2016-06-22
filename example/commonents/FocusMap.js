import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {FocusMapView, MapItem} from '../../common/focusmap/FocusMap';

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
				<FocusMapView height="400">
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/33.jpg?" />
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/33.jpg?" />
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/33.jpg?" />
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/33.jpg?" />
				</FocusMapView>
			</div>
		)
	}
}
export default Example;