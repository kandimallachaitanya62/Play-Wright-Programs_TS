import { test, expect } from '@playwright/test';

test('Validate new window/tab opens from dropdown selection', async ({ page, context }) => {
test.setTimeout(100000);
    // Open website
    await page.goto('https://demoqa.com/select-menu');

    // Example dropdown selection
    await page.locator('#oldSelectMenu').selectOption('Blue');

    // Wait for new tab/window popup
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // listens for new tab/window
        page.locator("a[target='_blank']").click() // action triggering new tab
    ]);

    // Wait for new page to load
    await newPage.waitForLoadState();

    // Validate new window/tab opened
    expect(newPage).toBeTruthy();

    // Print new tab title
    console.log('New Tab Title:', await newPage.title());

    // Assertion
    await expect(newPage).toHaveTitle(/DEMOQA|ToolsQA/i);

    console.log('New window/tab opened successfully');
});