# bespoke-history
## URL `window.history` based router for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Works in similar way as [bespoke-hash](https://github.com/markdalgleish/bespoke-hash) but uses `window.history` instead

### Usage

```javascript
bespoke.plugins.history = require('bespoke-history');

bespoke.from(selector, {
  history: true
});

```

By default it will route urls against `/`, but you can configure root path:

```javascript
bespoke.from(selector, {
  history: { root: '/my-custom-root/' }
});

```

### Installation
#### npm

In your presentation path:

	$ npm install bespoke-history
