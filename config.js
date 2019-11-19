let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: 'true',
    specs: ['Demo/Alerts.spec.js'],
    capabilities:{
      'browserName': 'chrome'
    },
    onPrepare: function(){
      //browser.manage().timeouts().implicitlyWait(12000);
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailureSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true


      }));

      //Add a screenshot reporter and store screenshots to '/tmp/screenshots';
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'demo/screenshots',

        preserveDirectory: false,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        docName: 'Report.html'

      }).getJasmine2Reporter());
    }
  };