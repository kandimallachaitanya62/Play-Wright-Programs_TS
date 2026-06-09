import { test, expect } from '@playwright/test';

test('Upload file and verify success message', async ({ page }) => {

    
    await page.goto('https://the-internet.herokuapp.com/upload');

   await page.waitForTimeout(2000);
    await page.locator('input#file-upload')
        .setInputFiles('C:/SeleniumWebElements/TomandJerry.JPG');
           await page.waitForTimeout(2000);


   
    await page.locator('input.button').click();

    
    await expect(page.locator('h3'))
        .toHaveText('File Uploaded!');

    console.log('File uploaded successfully');
       await page.waitForTimeout(3000);

});