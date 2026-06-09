//Write a script to close all new windows/tabs except the one with link icon in dropdown.
import { test, expect } from '@playwright/test';

test("Close all tabs except Support page", async ({ browser }) => {

    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
                await parentPage.waitForTimeout(2000);

await parentPage.locator("//input[@name='txtUserName']").fill("selenium");

    await parentPage.locator("//input[@name='txtPassword']").fill("selenium");
     await parentPage.locator("//input[@name='Submit']").click();
                     await parentPage.waitForTimeout(2000);

  await parentPage.locator("//span[text()='Help']").hover();
                  await parentPage.waitForTimeout(2000);

  const [childPage] = await Promise.all([
        context.waitForEvent("page"),
        parentPage.locator("//span[text()='Support']" ).click()
        ]);
 await childPage.waitForLoadState();
const pages = context.pages();
let requiredPage;

for (const p of pages) {
const title = await p.title();
 console.log("Title:", title);

 if (title.includes('Support')) {
            requiredPage = p;
        } else {
            await p.close();
        }
    }

    
    if (requiredPage) {
        await requiredPage.bringToFront();
        await requiredPage.waitForTimeout(3000);
    }
});