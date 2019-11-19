
describe('Testing with Browser Actions', function() {
    it('should open webpage', function(){
         browser.get("http://juliemr.github.io/protractor-demo/");
         browser.sleep(1000);
    });
    
    // it('should refresh the page', function() {
    //     browser.refresh();
    //     browser.sleep(1000);
    // });
    
    // it('should go back to previous page', function() {
    //     browser.get("https://www.staples.com/");
    //     browser.navigate().back();
    //     browser.sleep(1000);
    // });
    
    // it('should go to next page', function() {
    //     browser.navigate().forward();
    //     browser.sleep(1000);
    // });
    
    it('should get pahe title', function() {
        browser.getTitle().then (function(title){
           console.log('Title of the page ' + title);
        });
        
        it('should get the URL', function() {
            browser.getCurrentUrl().then(function(url){
                console.log('The url of the page ' + url);
            });
        });
            
        
    });
        
        
        
        
});
    