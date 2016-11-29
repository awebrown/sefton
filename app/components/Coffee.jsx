let React = require('react'),
    Menu = require('Menu');

let Coffee = React.createClass({
    getInitialState: function() {
        return { showItems: true };
    },
    onClick: function() {
        this.setState({showItems: !this.state.showItems});
    },
    render: function() {
        return (
            <div>
              <h4 onClick={this.onClick}>Coffee</h4>
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
                <li><h5>Item 1</h5></li>
                <li><h5>Item 2</h5></li>
                <li><h5>Item 3</h5></li>
                <li><h5>Item 4</h5></li>
                <li><h5>Item 5</h5></li>
              </ul>

            </div>
        );
    }
});



module.exports = Coffee;
