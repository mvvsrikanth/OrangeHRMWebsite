import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { AssertUtil } from '../util/AssertUtil';
import { CommonUtils } from '../util/CommonUtils';

test('verify login Page',async()=>{
    await CommonUtils.startBrowser();
    const loginPage = new LoginPage();

 await loginPage.login();

 AssertUtil.assertEquals(await CommonUtils.getElementText(loginPage.getWelcomePage()),'Welcome mvvsrikanth');
        

})