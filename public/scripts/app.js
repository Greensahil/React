'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML


var app = {
  title: "Main Title",
  options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  reRenderDom();
};

var removeAll = function removeAll() {
  app.options = [];
  reRenderDom();
};

var appRoot = document.getElementById('app');

var reRenderDom = function reRenderDom() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      'This is some info'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'button',
        { onClick: removeAll },
        'Remove All'
      ),
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

reRenderDom();
