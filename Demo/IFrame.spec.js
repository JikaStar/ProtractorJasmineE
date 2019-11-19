

describe('Practicing Iframe', function() {
    // beforeAll(function(){
    // browser.waitForAngularEnabled(false);
    // browser.get("http://the-internet.herokuapp.com/iframe");
   

    // });
    // it('should swith to Iframe',  function() {
    //  // browser.sleep(4000);
    //   browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe'))).then(function(){
    //     $('#tinymce').click();
    //     $('#tinymce').clear();
    //     $('#tinymce').sendKeys('Cyberstars');
    //     browser.sleep(4000);
    //   });
      it('should swith to iframe', () => {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.qaclickacademy.com/");
        var EC=protractor.ExpectedConditions;
          browser.wait(EC.alertIsPresent(),13000);
          browser.switchTo().alert();
         // var myAlert=browser.switchTo().alert();
          //myAlert.dismiss();
          //browser.switchTo().frame(browser.driver.findElement(by.css('.video-wrapper>iframe'))).then(function(){
          //element(by.id('#player')).click();
          browser.sleep(1000);
          });
      });
      
    
//});
    