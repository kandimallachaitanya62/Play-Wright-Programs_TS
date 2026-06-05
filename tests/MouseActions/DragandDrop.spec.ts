import{test,expect} from '@playwright/test'
test("Handiling mouse actions doubleclick action", async({page})=>{
     await page.goto("file:///C:/SeleniumWebElements/Drag and Drop.html");
     await page.dragAndDrop("//img","//div");
     await page.waitForTimeout(3000);

})