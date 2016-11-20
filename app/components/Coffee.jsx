let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Coffee = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <ul className="coffee coffee-menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    );
  }
});

module.exports = Coffee;
