import {test} from '@playwright/test';

test('array',async()=>
{

  
    const name= new Array(3);
    name[0]="vandan";
    name[1]="mishra";
    name[2]="anjali";

    console.log(name[1]);
});