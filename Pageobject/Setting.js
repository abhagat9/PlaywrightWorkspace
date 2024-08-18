const { test, expect } = require('@playwright/test');
const { assert } = require("console");
const exp = require('constants');
const { text } = require('stream/consumers');

class Setting{
    constructor(page)
    {
        
        this.page=page;
        this.settingmenu = page.locator("a[href='/Settingshome']");
        this.usermenulink = page.locator("a[href='/viewAllUser']");


    }

    async User()
    {
        await this.settingmenu.click();
        await this.usermenulink.click();
        await this.page.pause();


        
    }
}
module.exports = {Setting};