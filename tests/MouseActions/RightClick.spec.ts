import {test,expect} from '@playwright/test'

test("Testcase on RightClick",async({page})=>{
    
  await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
  await page.waitForTimeout(3000);
 const k= await page.locator("//a[text()='OrangeHRM']");
 k.click({button : 'right'});
   await page.waitForTimeout(3000);





})