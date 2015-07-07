
var jack = require('jack-stack')
  , elasticsearch = require('elasticsearch');


module.exports = function() {
  var config = this.config
    , host = config.host || config.url + ':' + config.port + (config.hash || '');

  jack.useBefore('config', 'elasticsearch', function() {
    if (!jack.db) jack.db = {};

    jack.db.elasticsearch = {
      db: new elasticsearch.Client({
        host: host
      })
    };
  });

};
