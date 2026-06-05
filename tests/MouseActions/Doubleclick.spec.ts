import{test,expect} from '@playwright/test'
test("Handiling mouse actions doubleclick action", async({page})=>{
     await page.goto("file:///C:/SeleniumWebElements/Doubleclick.html");
     await page.locator("//p[text()='PLEASE DOUBLE CLICK HERE']").dblclick();
     await page.waitForTimeout(3000);

})