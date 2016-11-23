'use strict';

let React = require('react'),
    Home = require('Home'),
    Nav = require('Nav');

let Main = (props) => {
  return (
    <div className="main">
      <div className="row">
        <div className="columns medium-6 large-6 small-centered main-text text-center">
          {props.children}
          <div className="footer">
            <hr  />
            <Nav />
          </div>
        </div>

      </div>
    </div>
  );
}

module.exports = Main;
