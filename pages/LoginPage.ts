import { CommonUtils } from '../util/CommonUtils';
import { Page, Locator } from '@playwright/test';
import  configData  from "../config/configData.json";
export class LoginPage 
{
     

  private by_username = "input[name='txtUserName']";
  private by_password = "input[name='txtPassword']";
  private by_login ="input[name='Submit']";
  private by_welcomePage ="xpath =//li[text()='Welcome mvvsrikanth']";
    

    async login() :Promise<void>
    {
     await CommonUtils.enterValue(this.getUsername(),configData.username);
     await CommonUtils.enterValue(this.getPassword(),configData.password);
     await CommonUtils.clickElement(this.getLogin());

     

     
    }

   getUsername():string
   {
    return this.by_username;


   }

   getPassword() :string 
   {
     return this.by_password;


   }
   getLogin():string
   {
    return this.by_login;
   }

   getWelcomePage(): string
{
 return this.by_welcomePage;


}






}