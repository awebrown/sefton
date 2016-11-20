let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  render: function() {
    return (
    <div className="top-bar">
      <ul className="menu">
        <li>Sefton Coffee Co.</li>
        <li className="nav">
          <IndexLink to="/" className="Home-link" activeStyle={{fontWeight:'bold'}}>Home</IndexLink>
        </li>
        <li className="nav">
          <Link to="menu" className="menu-link" activeStyle={{fontWeight:'bold'}}>Menu</Link>
        </li>
      </ul>
    </div>
    );
  }
})

module.exports = Nav;
