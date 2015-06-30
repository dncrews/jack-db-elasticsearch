
var Plugin = require('olympus-plugin');

var force = new Plugin({
  name: 'db/elasticsearch',
  basePath: __dirname,
});

module.exports = force.export;
