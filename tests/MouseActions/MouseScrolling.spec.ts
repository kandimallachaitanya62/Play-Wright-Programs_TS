import {test,expect} from '@playwright/test'

test("Testcase on Scrolling",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.mouse.wheel(56,4422);
    await page.waitForTimeout(2000);
    await page.locator("//a[text()='Advertise Your Products']").click();

        await page.waitForTimeout(3000);


})