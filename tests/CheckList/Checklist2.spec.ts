import {test, expect} from '@playwright/test'
test("Handiling check list",async({page})=>{
    await page.goto("file:///C:/SeleniumWebElements/Country Name.Htm");
   // await page.locator("//option[3]").click();
   const Countrycount =await page.locator("//option").count();
   console.log("The total count of the countries"+Countrycount);
   

    await page.waitForTimeout(3000);
    

})