import {test} from '@playwright/test';
test('handle dropdown', async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.locator("#dropdown").selectOption("2");
    await page.pause();
    await page.locator("#dropdown").selectOption({label:'Option 1'});
    await page.pause();
});