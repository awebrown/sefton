let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Food = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="food food-menu">
          <li>Item 11</li>
          <li>Item 12</li>
          <li>Item 13</li>
          <li>Item 14</li>
          <li>Item 15</li>
        </ul>
    </div>
    );
  }
})

module.exports = Food;
