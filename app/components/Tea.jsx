let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Tea = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="tea tea-menu">
          <li><h4>Item 6</h4></li>
          <li><h4>Item 7</h4></li>
          <li><h4>Item 8</h4></li>
          <li><h4>Item 9</h4></li>
          <li><h4>Item 10</h4></li>
        </ul>
    </div>
    );
  }
})

module.exports = Tea;
