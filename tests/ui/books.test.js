const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://gbutunev-exam-prep-2.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  