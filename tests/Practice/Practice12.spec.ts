import { test, expect } from '@playwright/test';

test('Validate new tab popup after dropdown selection', async ({ page, context }) => {

    // Open website
    await page.goto('https://demo.automationtesting.in/Windows.html');

    // Count tabs before action
    const beforeTabs = context.pages().length;

    console.log("Tabs Before:", beforeTabs);

    // Select dropdown/menu
    await page.locator("//a[text()='Open New Seperate Windows']")
        .click();

    // Listen for new tab
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),

        // Click dropdown link/icon
        page.locator("//button[text()='click']")
            .click()
    ]);

    await newPage.waitForLoadState();

    // Count tabs after popup
    const afterTabs = context.pages().length;

    console.log("Tabs After:", afterTabs);

    // Validation
    expect(afterTabs)
        .toBeGreaterThan(beforeTabs);

    console.log(
        "New window/tab popped up successfully"
    );
});