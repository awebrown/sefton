let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <IndexLink to="coffee" className="active" activeStyle={{textDecoration:'underline'}}><h3>Coffee</h3></IndexLink>
          </li>
          <li>
            <Link to="tea" activeStyle={{textDecoration:'underline'}}><h3>Tea</h3></Link>
          </li>
          <li>
            <Link to="food" activeStyle={{textDecoration:'underline'}}><h3>Food</h3></Link>
          </li>
          <li>
            <Link to="snacks" activeStyle={{textDecoration:'underline'}}><h3>Snacks</h3></Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
