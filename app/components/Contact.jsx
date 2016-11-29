let React = require('react'),
    Menu = require('Menu');

var Contact = React.createClass({
    getInitialState: function() {
        return { showResults: true };
    },
    onClick: function() {
        this.setState({ showResults: false });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
});


module.exports = Contact;
