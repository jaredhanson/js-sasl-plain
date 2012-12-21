require(['require',
         'mocha',
         'chai'],
function(require, mocha, chai) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/sasl-plain.test',
           'test/sasl-plain.mechanism.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  });
});
