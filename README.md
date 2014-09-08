# bespoke-history
## [Bespoke.js](https://github.com/markdalgleish/bespoke.js) `window.history` based URL router

Works in similar way as [bespoke-hash](https://github.com/markdalgleish/bespoke-hash) but uses `window.history` instead

### Usage

```javascript
var history = require('bespoke-history');
bespoke.from(selector, [
  history()
]);

```

By default it will route urls against `/`, but you can customize root path:

```javascript
bespoke.from(selector, [
  history('/my-custom-root/')
]);

```

### Installation
#### npm

In your presentation path:

	$ npm install bespoke-history
