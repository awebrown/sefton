let React = require('react');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Sefton Coffee Co.</h3>
        <p>24 N 8th St <br /> Richmond, VA 23219</p>
        <p>Mon: 7:30 - 5 <br /> Tues - Fri: 7:30 - 7 <br /> Closed Weekends</p>
      </div>

    );
  }
})

module.exports = Home;
