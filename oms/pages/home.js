var React = require('react');

var Topbar = require('./home/topbar.js');

var Home = React.createClass({
	render: function() {
		return (
			<div> 
				<Topbar />
			</div> 
		); 
	}
});

module.exports = Home;
