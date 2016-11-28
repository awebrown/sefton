'use strict';

let React = require('react'),
    Home = require('Home'),
    Nav = require('Nav');

let Main = (props) => {
  return (
    <div className="main">
      <div className="row main-content">
        <div className="columns medium-6 large-6 small-centered main-text text-center">
          <h1>Sefton Coffee Co.</h1>
          <br />
          <br />
          {props.children}
        </div>
      </div>
      <div className="row footer">
        <div className="columns medium-6 large-6 small-centered text-center">
          <hr  />
          <Nav />
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
