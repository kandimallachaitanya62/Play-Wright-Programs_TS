//Write a program to select a radio button group using XPath and validate the selected value. 
import { test, expect } from '@playwright/test';

test("select a radio button group using XPath and validate the selected value", async ({ page }) => {

    await page.goto("https://demoqa.com/radio-button");
    await page.waitForTimeout(3000);

    
    await page.locator("input#yesRadio").click();
    const selectedValue = await page.locator("//span[text()='Yes']").textContent();

    console.log("Selected Value: " + selectedValue);
    await expect(page.locator("//span[text()='Yes']"))
        .toHaveText('Yes');

    console.log("Radio button selected successfully");

    await page.waitForTimeout(3000);
});