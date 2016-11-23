let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Coffee = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <ul className="coffee coffee-menu">
          <li><h4>Item 1</h4></li>
          <li><h4>Item 2</h4></li>
          <li><h4>Item 3</h4></li>
          <li><h4>Item 4</h4></li>
          <li><h4>Item 5</h4></li>
        </ul>
      </div>
    );
  }
});

module.exports = Coffee;
