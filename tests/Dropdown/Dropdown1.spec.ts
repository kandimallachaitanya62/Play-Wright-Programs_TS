import {test,expect} from '@playwright/test'
test("Handiling the dropdown",async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.locator("//input[@name='txtPassword']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);
    const F= page.frameLocator("//iframe[@id='rightMenu']");
    const DD= F.locator("select#loc_code");
    const dropdowncount=await(DD.locator("//option")).count();//dropdown count
    console.log("The drop down count is:"+dropdowncount);
    await page.waitForTimeout(3000);





})