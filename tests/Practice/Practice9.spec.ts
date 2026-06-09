//Write a program to switch to iFrame using frameLocator(), interact with button, and switch back.
import {test,expect} from '@playwright/test'

test("iFrame using frameLocator",async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(2000);

    await page.locator("//input[@name='txtUserName']").fill("selenium");
    await page.locator("//input[@name='txtPassword']").fill("selenium");
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(2000);
    await page.locator("li#pim").hover();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Add Employee']").click();
    await page.waitForTimeout(3000);
    let F=await page.frameLocator("iframe#rightMenu");
    await F.locator("input#txtEmployeeId").fill("9876");
    await F.locator("input#txtEmpLastName").fill("Kandimalla");
    await F.locator("input#txtEmpFirstName").fill("Chaitanya");
    await F.locator("input#txtEmpMiddleName").fill("Lakshmi");
    await F.locator("input#txtEmpNickName").fill("DeepuChaitu");
    await page.waitForTimeout(3000);


    await F.locator("input#photofile").setInputFiles("C:/Users/india/Pictures/Screenshots/Screenshot (44).png");

    await page.waitForTimeout(5000);
    await F.locator("input.backbutton").click();
        await page.waitForTimeout(3000);











    

})