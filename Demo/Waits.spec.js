describe('Working with Explicit Waits', function () {
  var EC=protractor.ExpectedConditions;
  
  
  it('should wait for an element to be visible', function() {
      
    browser.waitForAngular(Enabled);
  browser.get("http://automationpractice.com/index.php");
  browser.wait(EC.visibilityOf($$('.homeslider-description .btn').get(2)),14000).then(function(){
      $$('.homeslider-description .btn').get(2).click();

     });
      
    });
});