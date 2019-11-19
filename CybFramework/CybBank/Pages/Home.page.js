require('../Utilities/CustomLocators');

var HomePage=function(){

this.homeButton=$('.btn.home');
this.pageHeader=$('.mainHeading');
this.managerLoginButton=element(by.ngClick('manager()'));

};
module.exports=new HomePage();