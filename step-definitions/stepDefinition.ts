import {
    Given,
    When,
    Then
} from "@cucumber/cucumber";

import { FrameLocator } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { PIMPage } from "../pages/PIMPage";
import { CommonUtils } from "../util/CommonUtils";
import { AssertUtil } from "../util/AssertUtil";
import {setDefaultTimeout} from "@cucumber/cucumber";
import { AsyncLocalStorage } from "async_hooks";
import { AdminPage } from "../pages/AdminPage";

setDefaultTimeout(30000);

const loginPage = new LoginPage();
const pimPage = new PIMPage();
const adminPage = new AdminPage();

let frame: FrameLocator;


// Login Step
Given("log in to the application", async function () {

    await loginPage.login();

});


// Verify Welcome Message
Then("verify Welcome mvvsrikanth", async  () => {

    const welcomeText = await CommonUtils.getElementText(
        loginPage.getWelcomePage()
    );

    await AssertUtil.assertEquals(
        welcomeText,
        "Welcome mvvsrikanth"
    );

});


// Move Mouse to PIM
When("move the mouse to the PIM", async  () => {

    await CommonUtils.mouseHover(
        pimPage.getPim()
    );

});

 
// Click Add Employee
When("click on the Add Employee button", async  () => {

    await CommonUtils.clickElement(
        pimPage.getAddEmp()
    );

});


// Switch to iframe
When("switch to the iframe", async  () => {

    frame =
        await CommonUtils.switchToFrame(
            pimPage.getFrame()
        );

});


// Enter First Name
When(
    "enter the first name {string}",
    async (firstname: string)=> {

        await CommonUtils.frameEnterValue(
            frame,
            pimPage.getFirstName(),
            firstname
        );

    }
    
);


// Enter Last Name
When(
    "enter the last name {string}",
    async  (lastname: string)=> {

        await CommonUtils.frameEnterValue(
            frame,
            pimPage.getLastName(),
            lastname
        );

    }
);


// Click Save Button
   When("click the Save button to add the new employee",async  () => {
    await CommonUtils.clickElementInFrame(frame,pimPage.getSave());
       } );

    When("search by Name {string}",async(SearchBy:string)=>{
    await CommonUtils.SearchBy_Frame(frame,pimPage.getSearchByDropdown(),SearchBy);
    }) ;
    When("search for employee {string}",async(SearchFor:string)=>{

         await CommonUtils.SearchFor_Frame(frame,pimPage.getSearchFor(),SearchFor)
    });
    When("click on Search Button",async()=>{
        await CommonUtils.Search_Frame(frame,pimPage.getSearchButton());
    });
    When("click on Added Employee",async()=>{
        await CommonUtils. VisibleClick_Frame(frame,pimPage.getEmployeeName());
    });
    When("click on Contact Details",async()=>{
        await CommonUtils.VisibleClick_Frame(frame,pimPage.getAddressDetails());
    });
    When("click on Edit Contact",async()=>{
        await CommonUtils.clickElementInFrame(frame,pimPage.getEditContact());
    });
    When("select the country from Dropdown {string}",async(Country:string)=>{
      await CommonUtils.SearchBy_Frame(frame,pimPage.getSearchByCountry(),Country);
    });
    When("enter Street 1 {string}",async(Stree1:string)=>{
         await CommonUtils.frameEnterValue(frame,pimPage.getStreet1(),Stree1);
    });
    When("enter Street 2 {string}",async(Stree2:string)=>{
         await CommonUtils.frameEnterValue(frame,pimPage.getStreet1(),Stree2);
    });
    When("enter Mobile number {string}",async(mobile:string)=>{
    await CommonUtils.frameEnterValue(frame,pimPage.getMobile(),mobile);
    });
    When("click on Save Contact",async()=>{
        await CommonUtils.clickElementInFrame(frame,pimPage.getSaveContact());
    });
    
    //Verify the Delete Employee
    When ("click on select all checkbox",async()=>{
      // Click on Check All
    await CommonUtils.clickElementInFrame(frame,pimPage.getCheckAll());
       
    });
    When("click on Delete",async()=>{
     // Click on Delete 
         await CommonUtils.clickElementInFrame(frame,pimPage.getEmpDelete());

    });
    
    Then("Verify successfull message {}",async(DeleteMessage:string)=>{

        await AssertUtil.assertEquals(await CommonUtils.getElementFrameText(frame,pimPage.getDeleteMessage()),DeleteMessage);
    });



   
/*
// Click Edit Button
When("click the Edit button", async  () => {

    await CommonUtils.clickElementInFrame(
        pimFrame,
        pimPage.getEdit()
        
        
    );

});


// Verify Smoker Checkbox
Then("verify checkbox inside a frame", async  () => {

    const isChecked =
        await CommonUtils.isElementChecked(
            pimFrame,
            pimPage.getChkSmoker()
        );

    await AssertUtil.assertTrue(isChecked);

    console.log("Checkbox is checked");

});


// Click Back Button
When(
    "click the Back button to return to the previous page",
    async  () => {

        await CommonUtils.clickElementInFrame(
            pimFrame,
            pimPage.getBackButton()
        );

    }
);


// Select Search Dropdown
When(
    "search employee first name in search field",
    async  () => {

        await CommonUtils.SearchBy_Frame(
            pimFrame,
            pimPage.getSearchByDropdown(),
            "Emp. First Name"
        );

    }
);


// Enter Employee First Name
When(
    "enter employee first name in search field",
    async  () => {

        await CommonUtils.frameEnterValue(
            pimFrame,
            pimPage.getSearchFor(),
            "Hanu"
        );

    }
);


// Click Search Button
When("click the search button", async  () =>{

    await CommonUtils.clickElementInFrame(
        pimFrame,
        pimPage.getSearchButton()
    );

});


// Verify Employee Name
Then(
    "verify that the employee name displayed matches {string}",
    async  (expectedEmployeeName: string) =>{

        const actualEmployeeName =
            await CommonUtils.getElementTextInFrame(
                pimFrame,
                pimPage.getEmployeeName()
            );

console.log("actualEmployeeName : "+actualEmployeeName);
console.log("expectedEmployeeName : "+expectedEmployeeName);

        await AssertUtil.assertEquals(
            actualEmployeeName,
            expectedEmployeeName
        );

    }
); */

// ADMIN PAGE 
 When ("mouse hover on Admin",async()=>{
    await CommonUtils.mouseHover(adminPage.getAdminPage());

 });
 When ("mouse hover on Company Information",async()=>{
    await CommonUtils.mouseHover(adminPage.getCompanyInfo());
 });
 When("click on General",async() =>{
    await CommonUtils.clickElement(adminPage.getGeneral());
 });
 Then("verify company info",async()=>{
     const CompanyTitle = await CommonUtils.getElementText(adminPage.getCmpVerify());
 });