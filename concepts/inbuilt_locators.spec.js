import {test} from '@playwright/test';
test.describe('inbuilt locators', ()=>
{
    
    test.beforeEach('playwright inbuilt locators', async({page})=>
    {
       await page.goto("https://automationexercise.com/signup")
    });
    test('getByPlaceHolder()', async({page})=>
    {
       
       await  page.getByPlaceholder("Email Address").first().fill("vandanmishra123gmail.com");
       await page.pause();
    });
    test('getByText()', async({page})=>
    {
       await  page.getByText("Login").nth(2).click();
       await page.pause();
    });


});