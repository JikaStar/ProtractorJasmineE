
describe('Practicing with Selenium Locators', function() {
    it('should type in inputbox wth id', function(){
        //non angualar pages
          browser.ignoreSynchronization=true;
          browser.get("https://skyid.sky.com/signup/skycom");
          //element(by.id('firstname')).sendKeys('David');
          element(by.xpath("//*[@id='firstname']")).sendKeys('David');
          browser.sleep(3000);

    });
    
    // it('should type in inputbox with Name', function() {
    //     element(by.name('lastname')).sendKeys('Smith');
        
    // });
    
    // it('should get text from element with className ', function() {
    //     element(by.className('page-header-two')).getText().then(function(text){
    //         console.log('Here our text '+ text);
    //     });
        
    //     it('should click on element with tagname', function() {
    //         element(by.tagName("button")).click();
            

    //     });
        
    //     it('should click on element with linkText', function() {
    //         element(by.linkText("Privacy & Cookies Notice")).click();
            
    //     });
        
    //     it('should click on element with partialLinkText', function() {
    //         element(by.partialLinkText('Cookies Notice')).click();
    //         browser.sleep(3000);
    //     });
            
            
            
    // });
        
        
});
    