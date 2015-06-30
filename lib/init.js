
var elasticsearch = require('elasticsearch')
  , config = require('./config');

var host = config.host || config.url + ':' + config.port + (config.hash || '');

module.exports = function(olympus) {
  if (!olympus.db) olympus.db = {};

  olympus.db.elasticsearch = {
    db: new elasticsearch.Client({
      host: host
    })
  };
};
