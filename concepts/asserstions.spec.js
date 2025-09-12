import {test,expect} from '@playwright/test';

test.describe('learn assertions', ()=>
{
    test('toBe()' , async({page})=>
    {
        const textFromExcel="Login to your account";
        await page.goto("https://automationexercise.com/signup");
        const textFromWeb = await page.locator("//h2[contains((normalize-space(text())), 'Login to your account')]").textContent();
        expect(textFromWeb).toBe(textFromExcel);
    });
});