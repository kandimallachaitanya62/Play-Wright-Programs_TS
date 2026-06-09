//Write a program to check whether parent window contains iframe or not after frame navigation

import { test, expect } from '@playwright/test';

test("Check parent window contains iframe or not", async ({ page }) => {
    await page.goto( "http://127.0.0.1/orangehrm-2.5.0.2/login.php");
        await page.waitForTimeout(3000);
await page.locator( "//input[@name='txtUserName']" ).fill("selenium");
 await page.locator("//input[@name='txtPassword']" ).fill("selenium");
await page.locator("//input[@name='Submit']" ).click();
    await page.waitForTimeout(3000);
  await page.locator("li#pim").hover();
      await page.waitForTimeout(3000);
await page.locator("//span[text()='Add Employee']" ).click();
    const totalFrames =page.frames().length;
    console.log("Total Frames: " + totalFrames  );
    expect(totalFrames).toBeGreaterThan(1);
 console.log( "Parent page contains iframe"  );
    const frame = page.frameLocator( "iframe#rightMenu" );
     await page.waitForTimeout(3000);
 await frame.locator("input#txtEmployeeId").fill("9876");
 await frame.locator("input#txtEmpLastName").fill("Kandimalla");
    await frame.locator ("input.backbutton" ).click();

    await page.waitForTimeout(3000);
const iframeExists = await page.locator("iframe#rightMenu").count();
 if (iframeExists > 0) {
        console.log("Parent window contains iframe" );
    } else {
        console.log( "No iframe found" );
    }
        await page.waitForTimeout(3000);

});