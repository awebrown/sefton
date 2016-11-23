let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="coffee" activeStyle={{fontWeight:'bold'}}><h3>Coffee</h3></Link>
          </li>
          <li>
            <Link to="tea" activeStyle={{fontWeight:'bold'}}><h3>Tea</h3></Link>
          </li>
          <li>
            <Link to="food" activeStyle={{fontWeight:'bold'}}><h3>Food</h3></Link>
          </li>
          <li>
            <Link to="snacks" activeStyle={{fontWeight:'bold'}}><h3>Snacks</h3></Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
