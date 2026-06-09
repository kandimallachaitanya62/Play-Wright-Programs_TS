import {test, expect} from '@playwright/test'

test("test case on mousehover actions",async({page})=>{
    
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.locator("//input[@name='txtPassword']").fill("selenium");
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    const k=await page.locator("//span[text()='Benefits']");
    k.hover();
 await page.waitForTimeout(3000);
 k.click();
  await page.waitForTimeout(3000);


        



})