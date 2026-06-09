//Write a program to use XPath for dropdown selectOption(), trigger alert, handle it, and validate popup window.
import { test, expect } from '@playwright/test';

test("Dropdown, Alert and Popup Window Example", async ({ page, context }) => {

    // Open website
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html");

    // -------------------------------
    // Dropdown using XPath
    // -------------------------------

    await page.goto("file:///C:/SeleniumWebElements/Country Name.Htm");

    // Select dropdown value using XPath
    await page.locator("//select[@name='country']").selectOption("India");

    // Validate selected option
    const country = await page.locator("//select[@name='country']").inputValue();
    console.log("Selected Country is: " + country);

    expect(country).toBe("India");

    // -------------------------------
    // Handle Alert Popup
    // -------------------------------

    page.once('dialog', async dialog => {

        console.log("Alert Text: " + dialog.message());

        // Validate alert message
        expect(dialog.message()).toContain("I am an alert box!");

        // Click OK on alert
        await dialog.accept();
    });

    // Trigger alert
    await page.locator("//input[@id='alertexamples']").click();

    // -------------------------------
    // Popup Window Validation
    // -------------------------------

    await page.goto("https://the-internet.herokuapp.com/windows");

    const [popupPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[text()='Click Here']").click()
    ]);

    // Wait for popup page load
    await popupPage.waitForLoadState();

    // Get popup heading text
    const popupText = await popupPage.locator("//h3").textContent();

    console.log("Popup Text: " + popupText);

    // Validate popup content
    expect(popupText).toContain("New Window");

});