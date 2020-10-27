// HAPI utilise Boom pour la gestion d'erreurs
const Boom = require('boom');

module.exports.getAdd = function(request, reply){
  // parseFloat convert anything to either a float number or NaN
  term1 = parseFloat(request.params.term1)
  term2 = parseFloat(request.params.term2)

  if(isNaN(term1) || isNaN(term2)) {
    return reply(Boom.badRequest('At least one of the term is not a number.'))
  }

  reply(term1 + term2)
}

module.exports.getDivide = function(request, reply){
  dividend = parseFloat(request.params.dividend)
  divisor = parseFloat(request.params.divisor)

  if(isNaN(dividend) || isNaN(divisor)) {
    return reply(Boom.badRequest('At least one of the term is not a number.'))
  }
  
  if(divisor === 0) {
    return reply(Boom.badRequest('Divisor can not be 0.'))
  }

  reply(dividend / divisor)
}