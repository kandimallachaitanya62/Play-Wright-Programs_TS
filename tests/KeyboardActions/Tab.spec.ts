import{test,expect} from '@playwright/test'

test("Handiling Tab on Keyboard action", async({page})=>{


    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab');
    await page.locator("//input[@name='txtPassword']").fill("selenium");
     await page.keyboard.press('Tab');
         await page.waitForTimeout(2000);

     await page.locator("//input[@name='Submit']").click();
         await page.waitForTimeout(3000);





})