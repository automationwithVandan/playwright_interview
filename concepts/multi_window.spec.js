import {test} from '@playwright/test';

/**
 * 
 * Use page.waitForEvent('popup') 
 * →when you click on something in the current page and it opens a new tab.
   
   Use context.waitForEvent('page') 
  →when the popup could be triggered by any page in that context (more generic).
 * 
 */

test.skip('multi window ', async({page})=>
{
   await page.goto("https://the-internet.herokuapp.com/windows");
   const [newPage]=
   await Promise.all(
    [
        page.waitForEvent('popup'),
        page.locator("//a[contains(text(),'Click Here')]").click()
   ]);
    const text= await newPage.locator("//div[@class='example']/h3").textContent();
   console.log(text);
});
test.only('multi window using context', async({browser})=>
{
   const context =await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://the-internet.herokuapp.com/windows");
   const [newPage]=
   await Promise.all(
    [
        context.waitForEvent('page'),
        page.locator("//a[contains(text(),'Click Here')]").click()
   ]);
    const text= await newPage.locator("//div[@class='example']/h3").textContent();
   console.log(text);
});
