'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count : ',
      count,
      React.createElement(
        'button',
        { onClick: addOne, className: 'button' },
        '+1'
      ),
      React.createElement(
        'button',
        { onClick: minusOne, className: 'button' },
        '-1'
      ),
      React.createElement(
        'button',
        { onClick: reset, className: 'button' },
        'reset'
      )
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
