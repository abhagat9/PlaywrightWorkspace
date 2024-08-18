const { assert,expect } = require("console");

class LoginPage{
//exports.LoginPage = class LoginPage{

// Inside constractor define your locator

     constructor(page)
    {
        this.page=page;
        this.userName= page.locator("#emailId");
        this.Password=page.locator("#password");
        this.signinButton=page.locator("div.app-content.content:nth-child(1) div.content-wrapper div.wrapper:nth-child(6) div.auth-module__signupLayoutContainer___17BG9 div.auth-module__signupFormLayout___1KseD form.formBuilder-module__formContainer___1IsDg.login-module__loginFormContainer___1xmJT span.login-module__loginFormSubmitButtonWrapper___3pjIy:nth-child(2) span:nth-child(1) > button.ant-btn.ant-btn-primary.login-module__loginFormSubmitButton___1LjTZ");//(text='Sign in');//button[@type='submit']
        this.onboarding =page.locator("#simple-tab-0");
        this.Dashboard = page.locator('#simple-tab-1');
        
    }
    async goTO()
    {
        await this.page.goto("https://dev.simplify360.com/");
    }

    async invalidLogin(username,password)
    {
       await this.userName.type(username);
       await this.Password.type(password); 
       await this.signinButton.click();
       await this.page.waitForLoadState('networkidle');
    }
    
    async validLogin(username,password)
    {
       await this.userName.type(username);
       await this.Password.type(password); 
       await this.signinButton.click();
       await this.page.waitForLoadState('networkidle');
       // await expect(this.Dashboard).toBeFocused()
       // await this.onboarding.toHaveText('Onboarding')
       console.log(await this.page.title());
       console.log(await this.page.locator('#simple-tab-0').textContent())
     //    await this.addWorkspace.click();
     //    await this.tilesskip.click();
       
     //    await this.page.locator("span[data-testid='Onboarding-Welcome-Invite']").click();
    //     await expect(LoginPage.onboarding).toBeFocused();

    }
}
module.exports = {LoginPage};