import {test,expect} from '@playwright/test'
test("Handiling the dropdown",async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.locator("//input[@name='txtPassword']").fill("selenium");
    await page.locator("//input[@type='Submit']").click();
    await page.waitForTimeout(3000);
    const F= page.frameLocator("//iframe[@id='rightMenu']");
        await page.waitForTimeout(3000);
   await expect(F.locator("//select[@id='loc_code']")).toBeVisible();
    const DD= F.locator("select#loc_code");
    const dropdowncount=await(DD.locator("//option")).count();//dropdown count
    console.log("The drop down count is:"+dropdowncount);
  //case:1 to print all elements in the drop down
     const DDvalues = await(DD.locator("//option")).allTextContents();
     console.log(DDvalues);
     await DD.selectOption({index : 3});
    await page.waitForTimeout(5000);





})