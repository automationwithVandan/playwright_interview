import {test,expect} from '@playwright/test';

test.describe.configure({mode:'serial'});
test.describe('learn assertions', ()=>
{
    test('toBe()' , async({page})=>
    {
        const textFromExcel="Login to your account";
        await page.goto("https://automationexercise.com/signup");
        const textFromWeb = await page.locator("//h2[contains((normalize-space(text())), 'Login to your account')]").textContent();
        expect(textFromWeb).toBe(textFromExcel);
    });

    test('toBeTruthy', async({page})=>{
        const text1=true;
        expect(text1).toBeTruthy();
    });
});