# jack-db-elasticsearch
This Jack-Stack Plugin is used to add create `jack.db.elasticsearch`.

```js
jack.add(require('jack-db-elasticsearch'));
```


## Configuration
You can either pass in your configuration:

```js
var jack = require('jack-stack');
var elasticsearch = require('jack-db-elasticsearch');

jack.add(elasticsearch.configure({
  url: '1.1.1.1', // Some IP
  port: '1234', // Some PORT
  hash: 'q="something"', // Some optional hash
}));
```

Or you can use `node-config` and set the config variables in your config/ files:

```js
module.exports = {
  db: {
    elasticsearch: {
      url: '1.1.1.1', // Some IP
      port: '1234', // Some PORT
      hash: 'q="something"', // Some optional hash
    },
  }
};
```


### Options
You can either set the `host` parameter:
```js
elasticsearch.configure({
  host: 'https://full:path@to.domain:port'
})
```

or you can use the `url` and `port` (and optional `hash`) options:

```js
elasticsearch.configure({
  url: '1.1.1.1', // Some IP
  port: '1234', // Some PORT
  hash: 'q="something"', // Some optional hash
});
```

This uses the format: `host = config.url + ':' + config.port + (config.hash || '')`
