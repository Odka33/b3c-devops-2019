const
  dns = require('dns'),
  os = require('os');

let
  ipAdress = null,
  seen = 0;

dns.lookup(os.hostname(), function(err, ip) {
  ipAdress = ip;
})

module.exports = function(request, reply){
  seen++;
  reply(`Server IP is: ${ipAdress} - Seen: ${seen} times`);
}