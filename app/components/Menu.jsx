let React = require('react'),
    Coffee = require('Coffee'),
    Tea = require('Tea'),
    Food = require('Food'),
    Snacks = require('Snacks');


let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Coffee />
          </li>
          <li>
            <Tea />
          </li>
          <li>
            <Food />
          </li>
          <li>
            <Snacks />
          </li>
        </ul>
        <br />
        <br />
      </div>
    );
  }
});

module.exports = Menu;
