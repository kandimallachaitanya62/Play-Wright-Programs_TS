import{test, expect} from '@playwright/test'
test("handiling check boxes",async ({page})=>{

    await page.goto("file:///C:/SeleniumWebElements/Country Check box.html");
    await page.locator("//input[2]").check();

    await page.waitForTimeout(3000);


})