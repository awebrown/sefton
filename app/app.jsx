'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Home = require('Home'),
    Coffee = require('Coffee'),
    Tea = require('Tea'),
    Food = require('Food'),
    Snacks = require('Snacks'),
    Menu = require('Menu'),
    Contact = require('Contact');

//style!css! are chained loaders, look in webpack.config.js
require('style!css!foundation-sites/dist/foundation.min.css');
//using jquery to tie in foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="menu" component={Menu} />
      <Route path="contact" component={Contact} />
      <Route path="coffee" component={Coffee} />
      <Route path="tea" component={Tea} />
      <Route path="food" component={Food} />
      <Route path="snacks" component={Snacks} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
