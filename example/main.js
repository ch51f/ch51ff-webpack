import React from 'react';
import {render, findDOMNode} from 'react-dom'
import {browserHistory, hashHistory, Router, Route, IndexRoute, Link, withRouter} from 'react-router'

import Home from './commonents/Home';
import Authority from './commonents/Authority';
import Button from './commonents/Button';
import Dialog from './commonents/Dialog';
import FocusMap from './commonents/FocusMap';
import Loading from './commonents/Loading';
import Mask from './commonents/Mask';
import QuickList from './commonents/QuickList';
import ScrollView from './commonents/ScrollViewNew';
import Svg from './commonents/Svg';

import './less/main.less';

let App = React.createClass({
	render: function() {
		return (
			<div>{this.props.children}</div> 
		) 
	}
})

render((
	<Router history={hashHistory}> 
		<Route path="/" component={App}> 
			<IndexRoute component={Home} /> 
			<Route path="authority" component={Authority} /> 
			<Route path="button" component={Button} /> 
			<Route path="dialog" component={Dialog} /> 
			<Route path="focusmap" component={FocusMap} /> 
			<Route path="loading" component={Loading} /> 
			<Route path="mask" component={Mask} /> 
			<Route path="quicklist" component={QuickList} /> 
			<Route path="scrollview" component={ScrollView} /> 
			<Route path="svg" component={Svg} /> 
		</Route> 
	</Router> 
), document.getElementById('app'))