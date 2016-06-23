import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import {FocusMapView, MapItem} from '../../common/focusmap/FocusMap';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
	}

	render() {
		return (
			<div>
				<FocusMapView height="400">
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/33.jpg?">
						<div className="demo-a">页面一</div>
					</MapItem>
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/34.jpg?">
						<div className="demo-a">页面二</div>
					</MapItem>
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/35.jpg?">
						<div className="demo-a">页面三</div>
					</MapItem>
					<MapItem imgUrl="https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/36.jpg?">
						<div className="demo-a">页面四</div>
					</MapItem>
				</FocusMapView>
			</div>
		)
	}
}
export default Example;