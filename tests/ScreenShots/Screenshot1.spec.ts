import {test,expect} from '@playwright/test'
test("Testcase on screenshots",async({page})=>{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.locator("//input[@name='txtPassword']").fill("selenium");
     await page.screenshot({path :"./myevidence/Beforelogin.jpg"});

     await page.locator("//input[@name='Submit']").click();
     await page.waitForTimeout(3000);
      await page.locator("li#pim").hover();
       await page.waitForTimeout(2000);
       await page.locator("//span[text()='Add Employee']").click();
      const F= await page.frameLocator("//iframe[@id='rightMenu']");
      await F.locator("input#txtEmployeeId").fill("8765");
      await F.locator("input#txtEmpLastName").fill("kandimalla");
      await F.locator("input#txtEmpFirstName").fill("chaitu");
    await F.locator("input#txtEmpMiddleName").fill("Deepu");
        await F.locator("input#txtEmpNickName").fill("Chaitu_Deepu");
        await F.locator("input#photofile").setInputFiles("C:/Users/india/Downloads/Chaituphoto (1).jpg");
        await page.waitForTimeout(2000);

         await page.screenshot({path :"./myevidence/Afterlogin.jpg"});

        await F.locator("//input[@value='Save']").click();
        await page.waitForTimeout(2000);
        await F.locator("input.backbutton").click();
                await page.waitForTimeout(3000);








            



      


})