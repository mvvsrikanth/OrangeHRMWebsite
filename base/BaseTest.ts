
import {test} from '@playwright/test';
import {CommonUtils} from '../util/CommonUtils';


test.beforeAll(async()=>{

await CommonUtils.startBrowser();


});

test.afterAll(async()=>{

await CommonUtils.browser?.close();

});