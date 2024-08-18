const { test, expect } = require('@playwright/test');
const {LoginPage}= require('../Pageobject/LoginPage');
const {Onboarding}= require('../Pageobject/Onboarding');

test('createnewworkspace',async({page})=> 

    {
      
        const loginPage = new LoginPage(page);
        const onboard = new Onboarding(page);
        loginPage.goTO();
        loginPage.validLogin((username,password));
        onboard.AddWorkspace();

    }
)