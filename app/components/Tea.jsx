let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Tea = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="tea tea-menu">
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
        </ul>
    </div>
    );
  }
})

module.exports = Tea;
