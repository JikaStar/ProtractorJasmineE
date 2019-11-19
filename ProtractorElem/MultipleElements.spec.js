describe('Multiple Elements', function()  {
    
    // it('should get all elements text', function(){
    //  browser.ignoreSynchronization=true;
    //  browser.get("https://hn.algolia.com/");
    //  var resultTitles=$$('.Story_title>a');
    //  resultTitles.getText().then(function(elementArrayText){
    //      browser.sleep(4000);
    //      console.log(elementArrayText);
    //  });
    // });
    it('should get eigth elements text', function(){
                browser.ignoreSynchronization=true;
                browser.get("https://hn.algolia.com/");
                var seventhResult=$$('.Story_title>a');
                seventhResult.getText().then(function(elementArrayText){
                    browser.sleep(4000);
                    console.log(elementArrayText);
                });
            });
        });
//     it('should get eigth elements text', function(){
//         browser.ignoreSynchronization=true;
//         browser.get("https://hn.algolia.com/");
//         var seventhResult=element.all(by.css('.Story_title>a')).get(7);
//         seventhResult.getText().then(function(elementArrayText){
//             browser.sleep(4000);
//             console.log(elementArrayText);
//         });
// });
