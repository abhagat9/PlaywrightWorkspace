const { test, expect } = require('@playwright/test');
const { assert } = require("console");
const exp = require('constants');
const { text } = require('stream/consumers');
class Unibox
{
    constructor(page)
    {
        this.page=page;
        this.uniboxmenu = page.locator("a[href='/apps/unibox']");
        this.universalsearch = page.locator("#outlined-basic");
        this.universalsearch1 = page.locator("#outlined-basic");
        //this.lhssearch = page.locator("#app > div > div.wrapper.d-flex > div.height-100.mainContainer > div.leftContainer > div > div.headSection > div:nth-child(2) > img:nth-child(3)"); 
        //this.searchIconSelector = '[datatestid="Unibox-RightSection-Search"]';
       this.selectticket = page.locator("span[title='Ticket ID']");
    }

    async uniboxserch(ticketid,tickettext)
    {
        await this.uniboxmenu.click();
        await this.page.waitForLoadState('networkidle');
        await this.universalsearch.click();
        await this.page.waitForLoadState('networkidle');
        await this.universalsearch.fill(ticketid);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
        await this.universalsearch1.fill(tickettext);
        await this.page.keyboard.press('Enter');
        //await this.page.pause();
        await this.page.waitForLoadState('networkidle');
        
    }

  
 
}
module.exports = {Unibox};