import {test} from '@playwright/test';

test.skip('counting frames inside parent frame',async({page})=>
{

    // we can not directly access page.childFrames()-> because childframes will be always
    // inside the frame only
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
    //locating parent frame using page.frame
   const mainPageFrames=  page.frame('frame-top');
    //getting frames inside parent frame
   const totalChildFrames=mainPageFrames.childFrames();
   // counting total child frames inside parent frame
   console.log(`total frames are ${totalChildFrames.length}`);
});

//------------------------------------------------------------------------------------------
test.skip('navigating to child frames from parent',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
   //locating parent frame using page.frame
   const parentFrame=  page.frame('frame-top');
    // accessing child frames inside parent frame

    // child frame returns array of frames
   const childFrames=parentFrame.childFrames();
 
   const leftFrame=  childFrames[0];
   const middleFrame=childFrames[1];
   const rightFrame= childFrames[2];

   const text=await rightFrame.locator("//body").textContent();
   console.log(`${text}`);
   // counting total child frames inside parent frame
});

//---------------------using frameLocator ------------------------------------------------

test.skip('frame locator method',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
    //locating parent frame using page.frame
    const middleFrameText=  await page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]').locator("//div[@id='content']").textContent();
    console.log(`${middleFrameText}`);
   
});

test.only('main frame',async({page})=>
{
  await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
   const mainFrame= page.mainFrame();
   console.log(mainFrame);
   
});

