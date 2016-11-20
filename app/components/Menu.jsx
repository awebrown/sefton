let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="coffee">Coffee</Link>
          </li>
          <li>
            <Link to="tea">Tea</Link>
          </li>
          <li>
            <Link to="food">Food</Link>
          </li>
          <li>
            <Link to="snacks">Snack</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
