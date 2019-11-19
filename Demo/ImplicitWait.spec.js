describe('Testing Implicit Wait', () => {
    it('should wait for a fixed amount of time when element not found',function(){
           browser.waitForAngularEnabled(false);
           browser.get("http://www.target.com/");
           element(by.linkText('Categories2')).click(); 
           

    });
});