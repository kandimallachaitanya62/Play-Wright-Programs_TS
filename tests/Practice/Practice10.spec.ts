import { test, expect } from '@playwright/test';

test('Print confirm alert text and dismiss', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');
    await page.waitForTimeout(3000);

    page.on('dialog', async (alert) => {
 console.log("Alert Message: " + alert.message());

        await alert.dismiss();
            await page.waitForTimeout(3000);

    });

    await page.locator('#confirmButton').click();

    await page.waitForTimeout(3000);
});