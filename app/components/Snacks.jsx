let React = require('react'),
    Menu = require('Menu');

let Snacks = React.createClass({
    getInitialState: function() {
        return { showItems: false };
    },
    onClick: function() {
        this.setState({showItems: !this.state.showItems});
    },
    render: function() {
        return (
            <div>
              <h4 onClick={this.onClick}>Snacks</h4>
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
                <li><h5>Item 16</h5></li>
                <li><h5>Item 17</h5></li>
                <li><h5>Item 18</h5></li>
                <li><h5>Item 19</h5></li>
                <li><h5>Item 20</h5></li>
              </ul>

            </div>
        );
    }
});

module.exports = Snacks;
