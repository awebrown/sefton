let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <IndexLink to="coffee" className="active" activeStyle={{textDecoration:'underline'}}><h4>Coffee</h4></IndexLink>
          </li>
          <li>
            <Link to="tea" activeStyle={{textDecoration:'underline'}}><h4>Tea</h4></Link>
          </li>
          <li>
            <Link to="food" activeStyle={{textDecoration:'underline'}}><h4>Food</h4></Link>
          </li>
          <li>
            <Link to="snacks" activeStyle={{textDecoration:'underline'}}><h4>Snacks</h4></Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
