require('../Utilities/CustomLocators');

var BankManagerPage = function(){

this.addCustomerButton=element(by.ngClick("addCust()"));
this.openAccountButton=element(by.ngClick("openAccount()"));
this.customersButton=element(by.ngClick("showCust()"));





};
module.exports=new BankManagerPage();
