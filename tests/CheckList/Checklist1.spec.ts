import {test, expect} from '@playwright/test'
test("Handiling check list",async({page})=>{
    await page.goto("file:///C:/SeleniumWebElements/Country Name.Htm");
    await page.locator("//option[3]").click();
    await page.waitForTimeout(3000);
    

})