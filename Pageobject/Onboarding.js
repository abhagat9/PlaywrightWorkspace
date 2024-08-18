const { test, expect } = require('@playwright/test');
const { assert } = require("console");
const exp = require('constants');
class Onboarding
{

    constructor(page)
    {
        this.page=page;
        this.addWorkspace = page.locator("div.app-content.content:nth-child(1) div.content-wrapper div.wrapper.d-flex div.height-100.mainContainer:nth-child(3) div.homePage-module__tobTab___2_w_W.MuiBox-root.css-8atqhb div.MuiBox-root.css-19zyc1g div.homePage-module__workspaceContainer___V4mQl.MuiBox-root.css-0 div.MuiBox-root.css-1f6oare:nth-child(2) > button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.homePage-module__addWorkspaceBtn___sPmfG.css-79xub");
        this.tilesskip = page.locator("button[datatestid='Onboarding-ChannelSelection-Skip'] span[class='selectTools-module__footerButtonText___aCtXN']");
        this.inviteuser =  page.locator("span[data-testid='Onboarding-Welcome-Invite']");
        this.invitepagetext = page.locator(".MuiTypography-root.MuiTypography-body1.header-module__subTitle___2WBec.css-9l3uo3");
        this.editworkspace = page.locator("#workspaceNameInput");
        this.customizeWS = page.locator("span[data-testid='Onboarding-Welcome-Customize-Workspace']");
        this.customizeWSnext = page.locator(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.onboarding-module__doneButton___8Fi_X.css-1nne8w9");  
    }

    async AddWorkspace()
{
    await this.addWorkspace.click();
    await this.tilesskip.click();
    await this.page.waitForLoadState('networkidle');
    await this.inviteuser.dblclick();
    await this.page.waitForLoadState('networkidle');
   // await this.invitepagetext.toContainText('Let others help you manage your online brand.');
    const invite = await expect(this.invitepagetext).toContainText('Let others help you manage your online brand.');
    //expect(invite).toBeTruthy();
   console.log(invite);

}
 async EditworkspaceName(namechange)
{
    await this.customizeWS.click();
    await expect(this.customizeWS).toContainText('Customize your workspace');
    await this.editworkspace.fill(namechange);
    await this.customizeWSnext.click();
    await this.page.waitForLoadState('networkidle');   
}
}
module.exports = {Onboarding};