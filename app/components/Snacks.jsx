let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Snacks = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="snacks snacks-menu">
          <li><h4>Item 16</h4></li>
          <li><h4>Item 17</h4></li>
          <li><h4>Item 18</h4></li>
          <li><h4>Item 19</h4></li>
          <li><h4>Item 20</h4></li>
        </ul>
    </div>
    );
  }
})

module.exports = Snacks;
