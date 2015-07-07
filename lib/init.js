
var jack = require('jack-stack')
  , elasticsearch = require('elasticsearch');


module.exports = function() {
  var config = this.config
    , host = config.host || config.url + ':' + config.port + (config.hash || '');

  if (!jack.db) jack.db = {};

  jack.db.elasticsearch = {
    db: new elasticsearch.Client({
      host: host
    })
  };
};
