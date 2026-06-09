import { test, expect } from '@playwright/test';

test('Handle nested frames and radio button', async ({ page }) => {

    // Open website
    await page.goto('https://demoqa.com/nestedframes');

    await page.waitForTimeout(2000);

    // Switch to parent frame
    const parentFrame = page.frameLocator('#frame1');

    // Switch to child frame inside parent
    const childFrame = parentFrame.frameLocator('iframe');

    // Example: Go to radio button page
    await page.goto('https://demoqa.com/radio-button');

    // Focus radio button
    const radioBtn = page.locator("//label[text()='Yes']");
    await radioBtn.focus();

    // Press Enter using keyboard
    await page.keyboard.press('Enter');

    // Assert radio button selected
    await expect(
        page.locator('#yesRadio')
    ).toBeChecked();

    console.log("Radio button selected successfully");
});