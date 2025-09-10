import {test,expect} from '@playwright/test';

test('verify button is checked or not' , async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const checkBoxOption2=page.locator("//input[@id='checkBoxOption2']");
    await checkBoxOption2.click();
    expect(checkBoxOption2).toBeChecked();
});