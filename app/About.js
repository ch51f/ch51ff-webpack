var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
  render: function() {
    return (
      <div>
      About
      <Link to="home">home</Link>
      </div>
    );
  }
});

module.exports = About;
