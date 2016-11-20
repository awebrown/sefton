let React = require('react'),
    Menu = require('Menu'),
    {Link, IndexLink} = require('react-router');

let Snacks = React.createClass({
  render: function() {
    return (
    <div>
      <Menu />
        <ul className="snacks snacks-menu">
          <li>Item 16</li>
          <li>Item 17</li>
          <li>Item 18</li>
          <li>Item 19</li>
          <li>Item 20</li>
        </ul>
    </div>
    );
  }
})

module.exports = Snacks;
