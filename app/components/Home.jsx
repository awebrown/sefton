let React = require('react');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Sefton Coffee Co.</h1>
        <p>24 N 8th St <br /> Richmond, VA 23219</p>
        <p>Mon: 7:30 - 5 <br /> Tues - Fri: 7:30 - 7 <br /> Closed Weekends</p>
    </div>

    );
  }
})

module.exports = Home;
