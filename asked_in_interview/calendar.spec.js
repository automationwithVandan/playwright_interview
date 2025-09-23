import {test} from '@playwright/test';

test('click on calendar 15 days back from today',async({page})=>
{
    const today= new Date();
    console.log(`${today}`);

    const daysbackDate= new Date(today);
    daysbackDate.setDate(today.getDate()-5);
    console.log(`${daysbackDate}`);

    
});