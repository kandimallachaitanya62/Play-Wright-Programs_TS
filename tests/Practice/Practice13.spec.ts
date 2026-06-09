//Write a program to validate if new window/tab pops up within a dropdown selection or not.
import { test, expect } from '@playwright/test';

test("Validate new tab popup from dropdown", async ({ browser }) => {

    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto( "http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await parentPage.waitForTimeout(3000);
    await parentPage.locator("//input[@name='txtUserName']").fill("selenium");

    await parentPage.locator( "//input[@name='txtPassword']").fill("selenium");

    await parentPage.locator("//input[@name='Submit']").click();
        await parentPage.waitForTimeout(3000);

console.log("Parent Page Title: " + await parentPage.title());
    const beforeTabs =context.pages().length;
console.log("Tabs Before: " + beforeTabs);
    await parentPage.waitForTimeout(3000);

    await parentPage.locator( "//span[text()='Help']" ).hover();
        await parentPage.waitForTimeout(3000);

    const [childPage] =await Promise.all
    ([
 context.waitForEvent('page'),
 parentPage.locator( "//span[text()='Support']" ).click()
    ]);

    await childPage.waitForTimeout(3000);

    const afterTabs = context.pages().length;
 console.log("Tabs After: " + afterTabs );

expect(afterTabs).toBeGreaterThan(beforeTabs);

console.log("New tab/window opened successfully");
 console.log("Child Page Title: " + await childPage.title());

    await childPage.close();
    await parentPage.close();
});