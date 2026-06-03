import {test, expect} from '@playwright/test'
test("Handiling check list",async({page})=>{
    await page.goto("file:///C:/SeleniumWebElements/Country Name.Htm");
   // await page.locator("//option[3]").click();
   const k =await page.locator("//option");
       k.nth(5).click();
       await page.waitForTimeout(2000);
       k.nth(7).click();
     await page.waitForTimeout(2000);
     k.nth(15).click();
     await page.waitForTimeout(2000);






   

    

})