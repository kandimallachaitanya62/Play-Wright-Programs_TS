import {test, expect} from '@playwright/test';

test("test case on alerts ",async({page})=>{
    await page.goto("file:///C:/SeleniumWebElements/AlertsOkCancel.html");
page.on('dialog',async(k)=>{
console.log(k.type());
console.log(k.message());
await page.waitForTimeout(2000);
//await(k.accept());
await(k.dismiss());

await page.waitForTimeout(3000);


})
await page.locator("//button").click();
await page.waitForTimeout(2000);


    
})