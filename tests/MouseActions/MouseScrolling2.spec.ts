import {test,expect} from '@playwright/test'

test("Testcase on Scrolling",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(6000);
  const k=  await page.locator("//a[text()='Advertise Your Products']");
      k.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    k.click();
   await page.waitForTimeout(3000);




})