
describe('Demonstrating Jasmine spec reporter', function() {
    
    it('should check if element is displayed',function(){
       browser.get("https://www.bhtp.com/");
       expect(element(by.linkText('GET A QUOTE')).isDisplayed()).toBe(true);

    });
});
    