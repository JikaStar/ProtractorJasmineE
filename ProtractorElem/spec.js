describe('Protractor steps',function() { 

    it('basic program', function() {
browser.get("http://juliemr.github.io/protractor-demo/");
    expect(browser.getTitle()).toEqual('Super Calculator');
browser.sleep(4000);

    });
    
});