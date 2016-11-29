let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  render: function() {
    return (
    <div>
      <ul className="nav-items">
        <li>
          <IndexLink to="/" className="home-link" activeStyle={{fontWeight:'bold'}}>Home</IndexLink>
        </li>
        <li>
          <Link to="menu" className="menu-link" activeStyle={{fontWeight:'bold'}}>Menu</Link>
        </li>
        <li>
          <Link to="contact" className="contact-link" activeStyle={{fontWeight:'bold'}}>Contact</Link>
        </li>
      </ul>
    </div>
    );
  }
})

module.exports = Nav;
