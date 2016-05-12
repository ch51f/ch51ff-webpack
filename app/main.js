var Home = require('./Home');
var About = require('./About');

var React = require('react');

var {render} = require("react-dom");

var {IndexRoute, Route, Router, Link, browserHistory, hashHistory} = require('react-router');

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
			<Route path="about" component={About} />
			<Route path="home" component={Home} />
		</Route>
	</Router>
), document.getElementById('app'));