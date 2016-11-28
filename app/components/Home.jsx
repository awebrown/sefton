let React = require('react');

let Home = React.createClass({
  render: function() {
    return (
      <div>
        <h5>
           24 N 8th St <br />
           Richmond, VA 23219
        </h5>
        <br />
        <h5>
           Mon: 7:30 - 5 <br />
           Tues - Fri: 7:30 - 7 <br />
           Closed Weekends
         </h5>
       </div>
    );
  }
})

module.exports = Home;
