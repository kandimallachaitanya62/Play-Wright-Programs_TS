import{test,expect} from  '@playwright/test'
test("test case on back space ",async ({page})=>{
    await page.goto("https://www.amazon.com")
        await page.waitForTimeout(2000);

    await page.locator("//input[@id='twotabsearchtextbox']").fill("beauty products for women");
    await page.keyboard.press("Backspace");

    await page.waitForTimeout(1000);
    await page.keyboard.press("Backspace");
    
    await page.waitForTimeout(1000);
    await page.keyboard.press("Backspace");
    
    await page.waitForTimeout(1000);
    await page.keyboard.press("Backspace");
    
    await page.waitForTimeout(1000);
    await page.keyboard.press("Backspace");
    
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+A');
    
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+X');
    
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+V');
    
    await page.waitForTimeout(2000);
    await page.keyboard.press('Delete');
    
    await page.waitForTimeout(2000);
    
    


})