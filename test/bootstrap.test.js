const path = require('path');

// Le namespace "global" est identique à "window" dans un navigateur, il permet
// d'exposer n'importe quelle variable dans la plus haute closure du programme
// Promise sera donc accessible partout

// Pour les Promise on utilise "bluebird" qui est un module plus optimisé et
// avec plus de fonctionnalité que les promesses ES6 standard.
global.Promise = require('bluebird');

// Freeport est un module qui nous permet de trouver un port libre sur la
// machine. On le promisify, pour qu'il fonctionne avec des promesses.
const freeport = Promise.promisify(require('freeport'));

// Chai est une library BDD/TDD
const chai = global.chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;

// Initialisation de chai, ajoute une méthode "should" à tout
chai.should();

const Hapi = require('hapi');

// Créé server.startAsync, l'équivalent de server.start mais avec des Promesses
Promise.promisifyAll(Hapi.Server.prototype);

// Hack pour que le erreurs lancée soit correctement attrapé par les promesses
// On utilisera donc la fonction `server.run` pour faire des requêtes sur l'API
Hapi.Server.prototype.run = function(options) {
  var self = this;
  return new Promise((resolve) => { self.inject(options, (resolve)) })
}

// Démarrage du serveur
function up() {
  global.server = new Hapi.Server();

  // Lancement du serveur
  return freeport().then((port) => {
    server.connection({port});
    server.route(require(path.join(__dirname, '..', 'router')));

    return server.startAsync();
  }).then(() => {
    console.log('Server is up!');
  })
}

// Arrêt du serveur
function down() {
  if(!global.server) return;
  global.server.stopAsync().then(() => {
    delete global.server;
    console.log('Server is down!');
  })
}

// Lancé par Mocha avant les tests
before(function(){
  console.log("Tests will run...");
  return up();
})

// Lancé par Mocha après les tests
after(function(){
  console.log("Tests are done.");
  return down();
})
