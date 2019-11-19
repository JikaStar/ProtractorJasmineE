describe('Uploading a file', function () {
  
    var path =require('path');

    
    xit('should upload file', function() {
        
        browser.get("http://nervgh.github.io/pages/angular-file-upload/examples/simple/");
        $$("input[type='file']").get(0);
        $$("input[type='file']").get(0).sendKeys('/Users/jibek/Desktop/JSproject/Demo/Docs/TestDoc.txt');
        element(by.css('.btn.btn-success.btn-s')).click();
        browser.sleep(1000);
    });
    it('should temp', () => {
      browser.waitForAngularEnabled(false);
      browser.get("https://fineuploader.com/demos.html");
      $$("input[type='file']").get(0).sendKeys('/Users/jibek/Desktop/JSproject/Demo/Docs/LOVE.jpg');
      browser.sleep(1000);
      expect(element(by.name('qqfile')).isDisplayed()).toBe(false);
    });
        
});