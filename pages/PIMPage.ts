export class PIMPage {

  private by_pim = "xpath=//li[@id='pim']";
  private by_addEmp = "xpath=//*[@id='pim']/ul/li[2]/a";
  private by_iframe = "iframe[name='rightMenu']";
  private by_pim_addemp = "xpath=//li[text()='PIM : Add Employee']";
    private by_firstName = "xpath=//input[@id='txtEmpFirstName']";
  private by_lastName = "xpath=//input[@id='txtEmpLastName']";
  private by_save = "xpath=//input[@id='btnEdit']";
  private by_edit = "xpath=//input[@id='btnEditPers']";
  private by_chkSmoker = "xpath=//input[@id='chkSmokeFlag']";
  private by_back = "xpath=//input[@class='backbutton']";
  private by_searchByDropdown = "xpath=//select[@id='loc_code']";
  private by_searchFor = "xpath=//input[@id='loc_name']";
  private by_searchButton = "//input[@value='Search']"
  private by_employeeName = "//a[contains(normalize-space(), 'mvv') and contains(normalize-space(), 'Srikanth')]";
  private by_Address ="xpath=//a[@id='contactsLink']";
  private by_EditContact ="xpath=//input[@id ='btnEditContact']";
  private by_searchByCountry ="xpath=//select[@name='cmbCountry']";
  private by_street1 ="xpath=//input[@name='txtStreet1']";
  private by_street2 ="xpath=//input[@name='txtStreet2']";
  private by_mobile="xpath=//input[@name='txtMobile']";
  private by_JobTitleBtn = "xpath=//a[@id='jobLink']";
  private by_editJob ="xpath=//input[@id='btnEditJob']";
  private by_JobTitle ="xpath=//select[@id='cmbJobTitle']";
  private by_empStatus ="xpath=//select[@id='cmbType']";
  private by_CheckAllBtn ="xpath=//input[@id='allCheck']";
  private by_DeleteBtn= "xpath=//input[@value='Delete']";
  private by_DeleteMsg ="xpath=//span[text()='Successfully Deleted']";


  getPim(): string {
     return this.by_pim;//"xpath=//li[@id='pim']"
  }

  getAddEmp(): string {
    return this.by_addEmp;
  }

  getPimAddEmp(): string {
        return this.by_pim_addemp; //"xpath=//li[text()='PIM : Add Employee']"
    }

  getFrame(): string {
    return this.by_iframe;//"iframe#rightMenu"
  }

  getFirstName(): string {
    return this.by_firstName;
  }

  getLastName(): string {
    return this.by_lastName;
  }

  getSave(): string {
    return this.by_save;
  }

  getEdit(): string {
    return this.by_edit;
  }

  getChkSmoker(): string {
    return this.by_chkSmoker;//"xpath=//input[@id='chkSmokeFlag']"
  }

  getBackButton(): string {
    return this.by_back;
  }

  getSearchByDropdown(): string {
    return this.by_searchByDropdown; //"xpath=//select[@id='loc_code']"
  }

  getSearchFor(): string {
    return this.by_searchFor;
  }

  getSearchButton(): string {
    return this.by_searchButton;
  }

  getEmployeeName(): string {
    return this.by_employeeName;
  }
  getAddressDetails():string
  {
    return this.by_Address;
  }
  getEditContact():string
  {
    return this.by_EditContact;
  }
  getSearchByCountry():string
  {
    return this.by_searchByCountry;
  }
  getStreet1():string
  {
    return this.by_street1;
  }
  getStreet2():string
  {
    return this.by_street2;
  }
  getMobile():string
  {
    return this.by_mobile;
  }
  getJobTitleBtn():string
  {
    return this.by_JobTitleBtn;
  }
  getEditJob():string
  {
    return this.by_editJob;
  }
 getJobTitle():string
  {
    return this.by_JobTitle;
  }
  getEmpStatus():string
  {
    return this.by_empStatus;
  }
  getCheckAll():string
  {

    return this.by_CheckAllBtn;
  }
  getEmpDelete():string
  {
    return this.by_DeleteBtn;
  }
  getDeleteMessage():string
  {
    return this.by_DeleteMsg
  }
}