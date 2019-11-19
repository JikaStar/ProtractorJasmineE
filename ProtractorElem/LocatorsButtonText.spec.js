
describe('Protractor Locators', function() {
    it('should locate by button', function(){
      browser.ignoreSynchronization=true;
      browser.get("https://transferwise.com/us");
      //element(by.buttonText('Compare price')).click();
      //element(by.partialButtonText('Compare')).click();
      element(by.cssContainingText('.tw-title-transition__title.text-inverse','A cheaper')).getText().then(function(text){
                 console.log(text);
      });
      //browser.sleep(4000);
    });
});
    