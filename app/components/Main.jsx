'use strict';

let React = require('react'),
    Menu = require('Menu');

let Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered text-center">
          <p>Main.jsx rendered</p>
          <Menu />
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
