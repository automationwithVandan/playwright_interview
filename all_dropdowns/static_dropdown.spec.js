import {test} from '@playwright/test';

test('static dropdown', async ({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");

   // scroll to element
   const countryDropdown= page.locator("#country");
   await countryDropdown.scrollIntoViewIfNeeded();

   // selectOption({label:'Australia'}) is used for selecting the data between <Option></Option> tag
   await page.locator("#country").selectOption({label:'Australia'});
   await page.pause();
   
   // selectOption("Germany") is used for selecting the option from in value attibute of option
   await page.locator("#country").selectOption("japan");
   await page.pause();
});