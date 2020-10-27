'use strict';

// HAPI est notre framework au même titre que Express.JS
const Hapi = require('hapi');

// Path nous permet de faire des opération sur les chemins
const path = require('path');

// On charge notre fichier de configuration
// __dirname représente le chemin du fichier actuel
// 'router' est le fichier dans lequel sont stocké nos routes.
const config = require(path.join(__dirname, 'config'))

// On initialise un nouveau serveur Web Hapi
const server = new Hapi.Server();

// On charge la configuration de ce serveur
server.connection(config.server);

// On ajoute toutes les routes Web qui constitue notre serveur web
server.route(require(path.join(__dirname, 'router')))

// Finalement on lance le serveur
// on n'oublie pas de capturer les erreurs
server.start((err) => {
    if (err) { throw err; }
    console.log(`Server running at: ${server.info.uri}`);
});