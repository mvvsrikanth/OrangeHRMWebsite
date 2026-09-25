import { readSync } from "fs";

export class AdminPage
{
private by_Admin = "xpath =//li[@id='admin']";
private by_CmpInfo ="xpath=//span[text()='Company Info']";   
private by_general ="xpath=//span[text()='General']";
private by_cmpInfoText ="xpath=//h2[text()='Company Info : General']"

getAdminPage():string
{
 return this.by_Admin;
}
getCompanyInfo():string
{
 return this.by_CmpInfo;
}
getGeneral():string
{
    return this.by_general;
}
getCmpVerify():string
{
    return this.by_cmpInfoText;
}

}