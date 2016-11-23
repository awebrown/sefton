let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Food = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="food food-menu">
          <li><h4>Item 11</h4></li>
          <li><h4>Item 12</h4></li>
          <li><h4>Item 13</h4></li>
          <li><h4>Item 14</h4></li>
          <li><h4>Item 15</h4></li>
        </ul>
    </div>
    );
  }
})

module.exports = Food;
