const { test,expect } = require('@playwright/test');
const {customtest} = require('../utils/test-base');
const {POManager} = require('../Pageobject/POManager');


customtest(`LoginPageincorrectcradential`,async({page,testdataforinvalidLogin})=>
{
   const poManger = new POManager(page);
   console.log(await page.title());
   const loginPage = poManger.getLoginPage();
   await loginPage.goTO();
   await loginPage.invalidLogin(testdataforinvalidLogin.username,testdataforinvalidLogin.password);
   
 })

 customtest('LoginPagecorrectcradential',async({page,testdataforLogin})=>
{
   const poManger = new POManager(page);
   console.log(await page.title());
   const loginPage = poManger.getLoginPage();
   await loginPage.goTO();
   await loginPage.validLogin(testdataforLogin.username,testdataforLogin.password);
   // const onboard = poManger.getOnboarding();
   // await onboard.AddWorkspace();
   // await onboard.EditworkspaceName(changeWSname.namechange);
  
 })
 
 customtest('Workspaceadding',async({page,testdataforLogin,changeWSname})=>
{
   const poManger = new POManager(page);
   console.log(await page.title());
   const loginPage = poManger.getLoginPage();
   await loginPage.goTO();
   await loginPage.validLogin(testdataforLogin.username,testdataforLogin.password);
   const onboard = poManger.getOnboarding();
   await onboard.AddWorkspace();
   await onboard.EditworkspaceName(changeWSname.namechange);
  
 })
 customtest('unibox ticket search',async({page,testdataforLogin,ticketidsearch})=>
 {
    const poManger = new POManager(page);
    console.log(await page.title());
    const loginPage = poManger.getLoginPage();
    await loginPage.goTO();
    await loginPage.validLogin(testdataforLogin.username,testdataforLogin.password);
    // const onboard = poManger.getOnboarding();
    // await onboard.AddWorkspace();
    // await onboard.EditworkspaceName(changeWSname.namechange);
    const unix = poManger.getUnibox();
    await unix.uniboxserch(ticketidsearch.ticketid,ticketidsearch.tickettext);
    
   
  })
  
   customtest('User Settings',async({page,testdataforLogin})=>
    {
       const poManger = new POManager(page);
       console.log(await page.title());
       const loginPage = poManger.getLoginPage();
       await loginPage.goTO();
       await loginPage.validLogin(testdataforLogin.username,testdataforLogin.password);
       const setting =poManger.getSetting();
       await setting.User();
    });

 
