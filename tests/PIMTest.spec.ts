import "../base/BaseTest";
import {FrameLocator, Locator, test} from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { CommonUtils } from '../util/CommonUtils';
import { AssertUtil } from "../util/AssertUtil";
import configData from "../config/configData.json";
import { PIMPage } from "../pages/PIMPage";
 
let loginPage:LoginPage =new LoginPage();
let pimPage : PIMPage  = new PIMPage();
let pimFrame :FrameLocator ;
let Save :Locator;
test.describe.configure({mode:'serial'});

test("Verify that an  employee can be added ",async()=>{
 await CommonUtils.startBrowser();
//call the Login Page
 await loginPage.login();
 // Verify the Welcome Page
await AssertUtil.assertEquals(await CommonUtils.getElementText(loginPage.getWelcomePage()),configData.welcomeText);
// Mouse hover on PIM
await CommonUtils.mouseHover(pimPage.getPim());
// Click on Add employee
await CommonUtils.clickElement(pimPage.getAddEmp());
// Switch to iframes
 pimFrame  = CommonUtils.switchToFrame(pimPage.getFrame());
 //AssertUtil.assertEquals(await CommonUtils.getElementFrameText(pimFrame,pimPage.getPimAddEmp()), configData.addEMPTitle);
 //Enter Employee First name 
 await CommonUtils.frameEnterValue(pimFrame,pimPage.getFirstName(),configData.firstname);
 //Enter employee last name
  await CommonUtils.frameEnterValue(pimFrame,pimPage.getLastName(),configData.lastname);
  // Click on Save button
  await CommonUtils.clickElementInFrame(pimFrame,pimPage.getSave());
})

  test('verify Edit Employee',async()=>{
     await CommonUtils.startBrowser();
//call the Login Page
 await loginPage.login();
  // Switch to iframes
 pimFrame  = CommonUtils.switchToFrame(pimPage.getFrame());
  // Search by Name
  await CommonUtils.SearchBy_Frame(pimFrame,pimPage.getSearchByDropdown(),configData.SearchBy);
  // Search for employee
   await CommonUtils.SearchFor_Frame(pimFrame,pimPage.getSearchFor(),configData.SearchFor);
   
   //Click on Search Button
   await CommonUtils.Search_Frame(pimFrame,pimPage.getSearchButton());
   console.log("Search button clicked");
    //Click on Added Employee
     await CommonUtils. VisibleClick_Frame(pimFrame,pimPage.getEmployeeName());
   
    // pimFrame  = CommonUtils.switchToFrame(pimPage.getFrame());
   // Click on Contact Details
   await CommonUtils.VisibleClick_Frame(pimFrame,pimPage.getAddressDetails());
  // Click on Edit Contact
    await CommonUtils.clickElementInFrame(pimFrame,pimPage.getEditContact());
  //Select the country from Dropdown
  await CommonUtils.SearchBy_Frame(pimFrame,pimPage.getSearchByCountry(),configData.Country);
  // Enter Street 1
  await CommonUtils.frameEnterValue(pimFrame,pimPage.getStreet1(),configData.Stree1);
  // Enter Street 2
  await CommonUtils.frameEnterValue(pimFrame,pimPage.getStreet2(),configData.Stree2);
  //Enter Mobile number
  await CommonUtils.frameEnterValue(pimFrame,pimPage.getMobile(),configData.mobile);
   // Click on Edit Contact
   await CommonUtils.clickElementInFrame(pimFrame,pimPage.getEditContact());
   /*//Click on Job menu
    await CommonUtils.VisibleClick_Frame(pimFrame,pimPage.getJobTitleBtn());
    // Click on Edit Job
    await CommonUtils.VisibleClick_Frame(pimFrame,pimPage.getEditJob());
    // Job Title
     await CommonUtils.SearchBy_Frame(pimFrame,pimPage. getJobTitle(),configData.JobTitle);
      // Employee status
     await CommonUtils.SearchBy_Frame(pimFrame,pimPage.getEmpStatus(),configData.EMPStatus);
      // Click on Edit Job
    await CommonUtils.clickElementInFrame(pimFrame,pimPage.getEditJob()); */
  })

  test('Verify Delete Employee',async()=>{
         await CommonUtils.startBrowser();
//call the Login Page
 await loginPage.login();
  // Switch to iframes
 pimFrame  = CommonUtils.switchToFrame(pimPage.getFrame());
  // Search by Name
  await CommonUtils.SearchBy_Frame(pimFrame,pimPage.getSearchByDropdown(),configData.SearchBy);
  // Search for employee
   await CommonUtils.SearchFor_Frame(pimFrame,pimPage.getSearchFor(),configData.SearchFor);
   
   //Click on Search Button
   await CommonUtils.Search_Frame(pimFrame,pimPage.getSearchButton());
   // Click on Check All
    await CommonUtils.clickElementInFrame(pimFrame,pimPage.getCheckAll());

    // Click on Delete 
    await CommonUtils.clickElementInFrame(pimFrame,pimPage.getEmpDelete());
    // Verify Delete Employee
    
await AssertUtil.assertEquals(await CommonUtils.getElementFrameText(pimFrame,pimPage.getDeleteMessage()),configData.DeleteMessage);

  })
 /*await CommonUtils.clickElementInFrame(pimFrame,pimPage.getEdit());
 
 //await AssertUtil.assertTrue(await CommonUtils.isElementChecked(pimFrame,pimPage.getChkSmoker()));//Is check not working
  
 //await CommonUtils.frameEnterValue(pimFrame,pimPage.getMiddleName(),configData.MiddleName);
 //await CommonUtils.Dropdown_frame(pimFrame,pimPage.getMaritalStatus(),configData.Marital); // Not wroking

await CommonUtils.clickElementInFrame(pimFrame,pimPage.getBackButton());


await CommonUtils.checkAll_frame(pimFrame,pimPage.getChckAll());
await CommonUtils.deleteEmployee(pimFrame,pimPage.getDeleteEmp()); */
