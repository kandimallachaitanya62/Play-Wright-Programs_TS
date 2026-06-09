//Write a program using XPath to hover mouse on menu item and click submenu.
import { test, expect } from '@playwright/test';

test('Hover mouse on menu and click submenu using XPath', async ({ page }) => {

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='txtUserName']").fill('selenium');
    await page.locator("//input[@name='txtPassword']").fill("selenium");
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    await page.locator("li#pim").hover();
   await page.waitForTimeout(3000);

    await page.locator("//span[text()='Add Employee']").click();

    console.log("Submenu clicked successfully");
       await page.waitForTimeout(3000);


})
    