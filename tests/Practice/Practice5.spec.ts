//Write a program to locate elements using getByLabel() and fill a form with keyboard actions (Tab + Enter)
import {test, expect} from '@playwright/test'

test("locate elements using getByLabel() and fill a form with keyboard actions",async({page})=>{
    
  test.setTimeout(100000);
await page.goto("https://demoqa.com/text-box");
await page.waitForTimeout(2000);
await page.getByLabel("Full Name").fill("chaitanya");
await page.waitForTimeout(2000);
await page.keyboard.press('Tab');
await page.waitForTimeout(2000);
await page.getByLabel("Email").fill("abcd123@gmail.com");
await page.keyboard.press('Tab');
await page.waitForTimeout(2000);
await page.getByLabel("Current Address").fill("Hyderabad");
await page.keyboard.press('Tab');
await page.waitForTimeout(2000);
await page.getByLabel("Permanent Address").fill("Anantapur");
await page.keyboard.press('Tab');
await page.waitForTimeout(2000);
const k= await page.locator("button#submit");
await page.keyboard.press('Enter');
await page.waitForTimeout(2000);


        



})