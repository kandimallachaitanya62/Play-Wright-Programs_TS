//Write a program to locate elements using getByLabel() and fill a form with keyboard actions (Tab + Enter)
import {test, expect} from '@playwright/test'
test("handiling getbylabel locator",async ({page})=>{

    await page.goto("file:///C:/Playwrightwebelements/ByLabel.html");
    await page.waitForTimeout(2000);
    await page.getByLabel("Username").fill("chaitu");

    await page.waitForTimeout(2000);

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab');
    await page.locator("//input[@name='txtPassword']").fill("selenium");
     await page.keyboard.press('Tab');
         await page.waitForTimeout(2000);

     await page.locator("//input[@name='Submit']");
     await page.keyboard.press('Enter');
     
         await page.waitForTimeout(3000);


})