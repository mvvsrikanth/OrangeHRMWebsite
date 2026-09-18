import { Before, After } from "@cucumber/cucumber";
import { CommonUtils } from "../util/CommonUtils";

Before(async () => {
    await CommonUtils.startBrowser();
});

After(async () => {
    if (CommonUtils.browser) {
        await CommonUtils.browser.close();
    }
});