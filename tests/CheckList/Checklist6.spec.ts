import {test, expect} from '@playwright/test'
test("Handiling check list",async({page})=>{
    test.setTimeout(100000);
    await page.goto("file:///C:/SeleniumWebElements/Country Name.Htm");
   // await page.locator("//option[3]").click();
   const k =await page.locator("//option").count();
   console.log("the total no of countries"+k);
   for(let i=0;i<k;i++){

    const k =await page.locator("//option").nth(i).click();
    await page.keyboard.down('Control');
    //await page.waitForTimeout(1000);

   }
       


   

    

})