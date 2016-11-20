let React = require('react');

let Coffee = React.createClass({
  render: function() {
    return (
      <div>
        <ol>
          <li>Hello</li>
          <li>This </li>
          <li>Is</li>
          <li>Working</li>
          <li>Fine</li>
        </ol>
      </div>
    );
  }
});

module.exports = Coffee;
