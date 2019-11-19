describe('Taking Basic Screenshot', function () {
  var fs = require('fs');


  
  it('should take screenshot', function() {
      browser.waitForAngularEnabled(false);
      browser.get("https://www.staples.com");
      browser.takeScreenshot().then(function(png){
          var stream = fs.createWriteStream('CyberScreenshot.png');

      
      stream.write(new Buffer(png, 'base64'));
      stream.end();


      });
  });
      
});