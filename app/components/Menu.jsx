let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="coffee" activeStyle={{fontWeight:'bold'}}>Coffee</Link>
          </li>
          <li>
            <Link to="tea" activeStyle={{fontWeight:'bold'}}>Tea</Link>
          </li>
          <li>
            <Link to="food" activeStyle={{fontWeight:'bold'}}>Food</Link>
          </li>
          <li>
            <Link to="snacks" activeStyle={{fontWeight:'bold'}}>Snacks</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
