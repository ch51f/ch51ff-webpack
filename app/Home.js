var React = require('react');
var {Link} = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div>
      Home
      <Link to="about">about</Link>
      </div>
    );
  }
});

module.exports = Home;
