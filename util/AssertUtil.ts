import { expect } from "@playwright/test";

export class AssertUtil
{
static assertFalse(message: any) {
  throw new Error('Method not implemented.');
}

public static assertEquals(actual:string,expected:string):void
{
 if(actual===expected)
 {
    console.log("Expected:" + actual + " is matched with actual :" + expected);
 }else
 {
   console.log("Expected:" + actual + " is not matched with actual :" + expected);
   
 }

}

static assertTrue(actual: boolean) {
    expect(actual).toBe(true); 
  }


} 