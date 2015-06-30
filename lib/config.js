var configLib = require('config');

var config = {};

if (configLib.has('db.elasticsearch')) config = configLib.get('db.elasticsearch');

module.exports = {
  url: config.url,
  port: config.port,
  hash: config.hash,
  host: config.host,
};
