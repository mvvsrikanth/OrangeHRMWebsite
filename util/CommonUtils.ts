import { Browser, chromium, firefox, FrameLocator, Locator, Page, selectors } from '@playwright/test';
import configData from '../config/configData.json';
import { AssertUtil } from './AssertUtil';
export class CommonUtils{
    static async hardWait(seconds: number): Promise<void> {

    await this.page.waitForTimeout(seconds * 1000);

  }
 
   static browser : Browser;
   static page: Page;
   static search : Locator;
   static configData: any;
    static context: any;
    static frame: FrameLocator;
    static pimFrame: any;
   
   
  public static async startBrowser():Promise<void>
   {
   
     try{

      const browserName : string = configData.browser.toLowerCase();

     switch(browserName)
      {
       case "firefox" :

        this.browser= await firefox.launch({headless:false});
        break;
       case "chromium" :
        this.browser = await chromium.launch({headless:false});
        break;
       default :
       this. browser = await firefox.launch({headless:false});
       break;
      }
       this.page= await this.browser.newPage();
       await this.page.goto(configData.url);
    }
    catch(error:any)
    
    {
      console.log("Browser not opened: " + error.message);
      

    }

  }
    
   public static findElement(selector: string): Locator {
    let element: Locator = null as any;

    try {
        element =  this.page.locator(selector);
    } catch (error: any) {
        AssertUtil.assertFalse(error.message);
    }

    return element;
}


    public static async enterValue(selector :string,value :string):Promise<void>

   {
     try 
     {
        
      await this.findElement(selector).fill(value);

     }
     catch(error:any)
     {

      console.log("Unable to enter value:", error.message);
      
     }
    }
      public static async  clickElement(selector:string):Promise<void>
     {
      try 
      {
       await this.findElement(selector).click();
      }
      catch (error:any)
      {
       console.log(error.message);

      }


      }
   public  static async getElementText(selector:string):Promise<string>

    {
      let  text :string = " ";
       try 
      {
        let  pageText:string|null = await this.findElement(selector).textContent();

        if(pageText!=null)
        {
          text  = pageText;
        }

       }
     catch(error:any)
      {
       console.log("Element not found : " + error.message);
      }
      return text ;
   
    }

    public static async mouseHover(selector:string):Promise<void>
    {

      try
      {
       await this.findElement(selector).hover();
      }
      catch(error:any)
      {
        console.log("Unable to Mousehover:" + error.message);
      
      }
    }

    public static  switchToFrame(selector:string):FrameLocator
    {
      let pimFrame : FrameLocator = null as any;
      try 
      {
        pimFrame = this.page.frameLocator(selector);
      }
      catch(error:any)
      {
        console.log("Text not  Verfied :" + error.message);
        
      }
      
      return pimFrame;
    }
    
    public static async frameEnterValue(pimFrame : FrameLocator,selector :string,value:string):Promise<void>
    {
      try
      {
        await pimFrame.locator(selector).fill(value);
      }
      catch(error:any)
      {
         console.log("Frame element not clicked :" + error.message);
          
      }

  }
    public static async clickElementInFrame(pimFrame : FrameLocator,selector :string):Promise<void>
    {
      try
      {
        await pimFrame.locator(selector).click();
      }
      catch(error:any)
      {
         console.log("Frame element not clicked :" + error.message);
          
      }

  }
   public static async isElementChecked(pimFrame : FrameLocator,selector :string):Promise<boolean>
   {
     let  chkElement :boolean =false;
    try
    {
       let element :Locator= await pimFrame.locator(selector);
     
       chkElement = await element.isChecked();
       
    }
    catch(error:any)
    {
      console.log("Element not checked :" + error.message);
      
    }
    return chkElement;
   }
   public static async SearchBy_Frame(pimFrame:FrameLocator,selector:string,value:string): Promise <void>
   {
    try 
    {
      this.search = await pimFrame.locator(selector);
      await this.search.click();
      await this.search.selectOption({label:value});
     
    }
    catch(error:any)
    {
      console.log("Search not clicked :"+ error.message);
      
    }
   
   }
   public static async Dropdown_frame(pimFrame:FrameLocator,selector:string,value:string):Promise<void>
   {
    try {
     let Dropdown : Locator= await pimFrame.locator(selector);
     Dropdown.selectOption({label:value});
    }catch(error:any)
    {
     console.log("Marital status not selected :" + error.message);
     
    }

  }
  public static async SearchFor_Frame(pimFrame:FrameLocator,selector:string,value:string):Promise<void>
  {
    try{
      let SearchData = await pimFrame.locator(selector);
      await SearchData.fill(value);

    }catch(error:any)
    {
      console.log("Search for not visible :" + error.message);
      
    }

  }
  public static async Search_Frame(pimFrame:FrameLocator,selector:string):Promise<void>
  {
    try 
    {
      let SearchBtn =await pimFrame.locator(selector);
      await SearchBtn.click();
      
    }catch(error:any)
    {
      console.log("No Searched Data found :" + error.message);
      
    }
  }
  public static async VisibleClick_Frame(pimFrame:FrameLocator,selector:string):Promise<void>
  {
    try{
      const employeeLink = pimFrame.locator(selector);

   await employeeLink.waitFor({ state: "visible" });

    await employeeLink.click();
    }
    catch(error:any)
    {
      console.log("Employee not clicked :" + error.message);
      
    }
  }



  public static async getElementFrameText(pimFrame:FrameLocator,selector:string):Promise<string>
  {
     let text:string|null ="";
    try 
    {
      let PageText :string|null  = await pimFrame.locator(selector).textContent();
      if(PageText!=null)
      {
        text = PageText;
      }

    }catch(error:any)
    {
      console.log("Elemet not found :" + error.message);
      
    }
      return text;


  }
  public static async checkAll_frame(pimFrame:FrameLocator,selector:string):Promise<void>
  {
    try{
    let SelectAll =  await  pimFrame.locator(selector);
     await SelectAll.click();
    }catch(error:any)
    {
     console.log("Not Seelected :" + error.message);
     
    }
  }
  
  public static async deleteEmployee(pimFrame:FrameLocator,selector:string):Promise<void>
  {
    try{

      await pimFrame.locator(selector).click();
    }catch(error:any)
    {
      console.log("Employee not deleted :"+ error.message);
      
    }

  }
 /* static async hardWait(seconds: number): Promise<void> {

    await this.page.waitForTimeout(seconds * 1000);

  }
*/
}