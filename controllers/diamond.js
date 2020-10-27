// HAPI utilise Boom pour la gestion d'erreurs
const Boom = require('boom');

module.exports.index = function(request, reply){
  reply(Boom.notImplemented())
}

module.exports.showForm = function(request, reply){
  reply(Boom.notImplemented())
}

module.exports.generate = function(request, reply){
  console.log(request.payload) // Show POST parameters
  reply(Boom.notImplemented())
}