import {test,expect} from '@playwright/test'

test("Handiling alert pop messages",async ({page})=>{

    await page.goto("file:///C:/SeleniumWebElements/Model Popup.html");
    await page.waitForTimeout(2000);


 await page.locator("button#Modal").click();
          await page.waitForTimeout(3000);
           await page.locator("span.close").click();




})