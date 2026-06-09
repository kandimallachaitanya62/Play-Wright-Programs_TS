//Write a program to handle simple alert, print its message, and accept it.  
import { test, expect } from '@playwright/test';

test("Handle simple alert, print message, and accept it", async ({ page }) => {

    await page.goto("https://demoqa.com/alerts");
    await page.waitForTimeout(3000);

    page.on('dialog', async (k) => {

        console.log("Alert Type: " + k.type());
        console.log("Alert Message: " + k.message());
    await page.waitForTimeout(3000);

        await k.accept(); 
    });
    await page.locator("//button[@id='alertButton']").click();

    await page.waitForTimeout(3000);
});