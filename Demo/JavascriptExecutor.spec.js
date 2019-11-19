describe('Practicing with JavaScript Executer', function () {
  beforeEach(function() {
      browser.waitForAngularEnabled(false);
      browser.executeScript('window.location="http://www.google.com";');
      
  });
  
  it('should get title/url/domain of the page', function() {
      browser.executeScript("return document.title").then(function(title){
      console.log(title);
      });
      
        browser.executeScript("return document.URL").then(function(url){
        console.log('url is '+ url);
        });
        
            browser.executeScript("return document.domain").then(function(domain){
            console.log('domain is'+ domain);
            });
        });
            
            xit('should type', function() {
                browser.executeScript("document.getElementsByName('q')[0].value='kindle'");
                //browser.sleep(2000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                //browser.sleep(3000);
                browser.executeScript("window.scrollBy(0,600)");
                //browser.sleep(3000);
                

            });
                
  });
      
    
    