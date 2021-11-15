const { Given, When, Then, Before,TableDefinition,DataTable,setDefaultTimeout, } = require ('@cucumber/cucumber')
const {  QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
const puppeteer = require("puppeteer");
// var page,browser; 
const {Inbox} = require ("mailinator-inbox");

import { Browser, Page } from "puppeteer";
import {gotoSalesForcePlus,clickDreamForceButton,clickWatchNowButton,clickLogInButton,clickEmailButton,typeEmail,typeCode,submitEmail,submitCode,clickSignUpButton,fillFirstForm,fillSecondForm,membershipCompeletion,playVideo} from "../../functions/func"

setDefaultTimeout(90000*2);  

// var browser:Browser,page:Page;
// page=new Page();
async function randomEmailGenerator(){
  let chars1 = 'abcdefghijklmnopqrstuvwxyz';
  let chars2=  '1234567890';
  let string1 = '';
  let string2=  '';
  for(var i=0; i<7; i++){
      string1 += chars1[Math.floor(Math.random() * chars1.length)];
      string2 += chars2[Math.floor(Math.random() * chars2.length)];
  }
  return(string1+string2 );
  } 

(async function(){await puppeteer.registerCustomQueryHandler('shadow', QueryHandler)})();


let page;


Before(async function(){
  const browser=await puppeteer.launch({headless:false,args: [
    '--disable-web-security',
  ],devtools:false}); 
  page = await browser.newPage(); 

})

Given('We are on SalesForce HomePage', async function () {
 
   

  await gotoSalesForcePlus(page);

      console.log("Given");
  });

  When('User tries to LogIn', async function () {

    await clickDreamForceButton(page);

    await clickWatchNowButton(page);
    
    await clickLogInButton(page);

  });

  When('Users proceeds to SignUp', async function (dataTable) {
   
    const randomEmail=await randomEmailGenerator(); 

    await clickEmailButton(page);

    await typeEmail(randomEmail,page);

    await page.waitFor(3000);

    await submitEmail(page);

    await page.waitFor(30000);
  
    const inbox = new Inbox(`${randomEmail}`);

    await inbox.refresh();

    const firstEmailHeader =  inbox.emailHeaders[inbox.emailHeaders.length-1];

    const firstEmail = await inbox.getEmail(firstEmailHeader.id);

    const text = firstEmail.textBody;

    let code = text.match(/\d{6}/)[0];

    await typeCode(code,page);

    await submitCode(page);

    await clickSignUpButton(page);

    await fillFirstForm(dataTable,page);

    await fillSecondForm(dataTable,page);

    await membershipCompeletion(dataTable,page);

  });


  Then('I have successfuly signed Up,after that a video is played', async function () {
  
   await playVideo(page);

    });