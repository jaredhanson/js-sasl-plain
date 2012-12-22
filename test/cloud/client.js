var Cloud = require('mocha-cloud');

var cloud = new Cloud('sasl-plain', process.env['SAUCE_LABS_USERNAME'], process.env['SAUCE_LABS_ACCESS_KEY']);
cloud.url('http://localhost:7070/');
cloud.browser('safari', '5', 'Mac 10.6');

cloud.on('init', function(browser) {
  console.log('  init : %s %s', browser.browserName, browser.version);
});

cloud.on('start', function(browser) {
  console.log('  start : %s %s', browser.browserName, browser.version);
});

cloud.on('end', function(browser, res) {
  console.log('  end : %s %s : %d failures', browser.browserName, browser.version, res.failures);
});

cloud.start();
