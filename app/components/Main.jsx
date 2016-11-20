'use strict';

let React = require('react'),
    Home = require('Home'),
    Nav = require('Nav');

let Main = (props) => {
  return (
    <div className="main">
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered text-center">
          <Home />
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
