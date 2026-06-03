import{test, expect} from '@playwright/test'
test("handiling check boxes",async ({page})=>{

    await page.goto("file:///C:/SeleniumWebElements/Country Check box.html");

   const k= await page.locator("//input").count();
   console.log("the total no of country are "+k);
   for(let i=0; i<k;i++){
    const k= await page.locator("//input").nth(i).check();
        await page.waitForTimeout(2000);

   }




})