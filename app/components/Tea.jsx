let React = require('react'),
    Menu = require('Menu');

let Tea = React.createClass({
    getInitialState: function() {
        return { showItems: false };
    },
    onClick: function() {
        this.setState({showItems: !this.state.showItems});
    },
    render: function() {
        return (
            <div>
              <h4 onClick={this.onClick}>Tea</h4>
              { this.state.showItems ? <Items /> : null }
            </div>
        );
    }
});

let Items = React.createClass({
    render: function() {
        return (
            <div>

              <ul className="menu-items text-left">
                <li><h5>Item 6</h5></li>
                <li><h5>Item 7</h5></li>
                <li><h5>Item 8</h5></li>
                <li><h5>Item 9</h5></li>
                <li><h5>Item 10</h5></li>
              </ul>

            </div>
        );
    }
});

module.exports = Tea;
