import React from 'react';
import {render, findDOMNode} from 'react-dom'
import {browserHistory, hashHistory, Router, Route, IndexRoute, Link, withRouter} from 'react-router'

import Home from './commonents/Home';
import Authority from './commonents/Authority';
import Button from './commonents/Button';
import Dialog from './commonents/Dialog';

import './less/main.less';

let App = React.createClass({
  render: function() {
	return (
	  <div>
		{this.props.children}
	  </div>
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
	  </Route>
  </Router>
), document.getElementById('app'))