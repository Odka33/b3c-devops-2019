const path = require('path');

// On défini toutes les routes de notre API
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: getHandler('index')
  },
  {
    method: 'GET',
    path: '/math/add/{term1}/{term2}',
    handler: getHandler('math', 'getAdd')
  },
  {
    method: 'GET',
    path: '/math/divide/{dividend}/{divisor}',
    handler: getHandler('math', 'getDivide')
  },
  {
    method: 'GET',
    path: '/diamond',
    handler: getHandler('diamond', 'index')
  },
  {
    method: 'GET',
    path: '/diamond/new',
    handler: getHandler('diamond', 'showForm')
  },
  {
    method: 'POST',
    path: '/diamond',
    handler: getHandler('diamond', 'generate')
  }
]

// getHandler est la fonction qui nous permet de retourner un handler,
// c'est à dire une méthode qui sera appelé lorsqu'un client ira sur une des
// route. 
function getHandler(controller, action) {
  controller = require(path.join(__dirname, 'controllers', controller));
  return action ? controller[action] : controller;
}