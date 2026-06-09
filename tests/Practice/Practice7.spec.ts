//Write a program to select multiple checkboxes using getByRole() locator and assert their checked state

import { test, expect } from '@playwright/test';
test('Select multiple checkboxes using getByRole', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

await page.waitForTimeout(2000);
await page.getByRole('checkbox', { name: 'Sunday' }).check();
        await page.waitForTimeout(2000);
await page.getByRole('checkbox', { name: 'Monday' }).check();
        await page.waitForTimeout(2000);
await page.getByRole('checkbox', { name: 'Tuesday' }).check();
        await page.waitForTimeout(2000);

await expect(page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked();
 await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeChecked(); 
 await expect(page.getByRole('checkbox', { name: 'Tuesday' })).toBeChecked();

    console.log('Checkboxes selected successfully');
            await page.waitForTimeout(2000);

});