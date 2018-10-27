const _ = require('lodash');

function component() {
    let element = document.createElement('div');
  //element.innerHTML = _.join(['Helloasdf', 'there!'], ' ');
  element.innerHTML = '<a> flott a </a>';
  return element;
  }
  document.body.appendChild(component());