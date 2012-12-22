var Cloud = require('mocha-cloud')
  , Canvas = require('term-canvas')
  , GridView = require('mocha-cloud-grid-view')
  , size = process.stdout.getWindowSize();


var Cloud = require('mocha-cloud');

var cloud = new Cloud('sasl-plain', process.env['SAUCE_LABS_USERNAME'], process.env['SAUCE_LABS_ACCESS_KEY']);
cloud.url('http://localhost:7070/');

// Windows 2012 => Window 8
// Windows 2008 => Window 7
//cloud.browser('internet explorer', '10', 'Windows 2012');  // PASS, but did not report
//cloud.browser('internet explorer', '9', 'Windows 2008');  // FAIL
//cloud.browser('internet explorer', '8', 'Windows 2003');  // FAIL
//cloud.browser('internet explorer', '7', 'Windows 2003');  // FAIL
//cloud.browser('internet explorer', '6', 'Windows 2003');  // FAIL

cloud.browser('chrome', '', 'Mac 10.8');
cloud.browser('chrome', '', 'Mac 10.6');
/*
cloud.browser('firefox', '14', 'Mac 10.6');
cloud.browser('firefox', '13', 'Mac 10.6');
cloud.browser('firefox', '12', 'Mac 10.6');
cloud.browser('firefox', '11', 'Mac 10.6');
cloud.browser('firefox', '10', 'Mac 10.6');
cloud.browser('firefox', '9', 'Mac 10.6');
cloud.browser('firefox', '8', 'Mac 10.6');
cloud.browser('firefox', '7', 'Mac 10.6');
cloud.browser('safari', '6', 'Mac 10.8');
cloud.browser('safari', '5', 'Mac 10.6');
*/


var canvas = new Canvas(size[0], size[1]);
var ctx = canvas.getContext('2d');
var grid = new GridView(cloud, ctx);
grid.size(canvas.width, canvas.height);
ctx.hideCursor();

process.on('SIGINT', function(){
  ctx.reset();
  process.nextTick(function(){
    process.exit();
  });
});

cloud.start(function(){
  grid.showFailures();
  setTimeout(function(){
    ctx.showCursor();
    process.exit(grid.totalFailures());
  }, 100);
});
