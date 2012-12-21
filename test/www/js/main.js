require.config({
  paths: {
    'test': '../..',
    'mocha': 'lib/mocha/mocha',
    'chai': 'lib/chai/chai'
  },
  packages: [
    { name: 'sasl-plain', location: '../../..' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['suite']);
