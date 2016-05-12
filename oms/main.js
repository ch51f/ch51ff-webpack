var React = require('react');
var {render} = require("react-dom");
var {IndexRoute, Route, Router, Link, browserHistory, hashHistory} = require('react-router');

var Home = require('./pages/home.js');

require('./less/style.less');

var App = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
});

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
		</Route>
	</Router>
), document.getElementById('app'));