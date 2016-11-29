let React = require('react'),
    Menu = require('Menu');

let Food = React.createClass({
    getInitialState: function() {
        return { showItems: false };
    },
    onClick: function() {
        this.setState({showItems: !this.state.showItems});
    },
    render: function() {
        return (
            <div>
              <h4 onClick={this.onClick}>Food</h4>
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
                <li><h5>Item 11</h5></li>
                <li><h5>Item 12</h5></li>
                <li><h5>Item 13</h5></li>
                <li><h5>Item 14</h5></li>
                <li><h5>Item 15</h5></li>
              </ul>

            </div>
        );
    }
});

module.exports = Food;
