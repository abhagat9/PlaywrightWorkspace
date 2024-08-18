const {LoginPage} = require('./LoginPage');
const {Onboarding} = require('./Onboarding');
const { Unibox } = require('./Unibox');
const { Setting } = require('./Setting');
class POManager
{

    constructor (page)
    {
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.onboard = new Onboarding(this.page);
        this.unix = new Unibox(this.page);
        this.setting = new Setting(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    
    }
    getOnboarding()
    {
        return this.onboard;
    }
    getUnibox()
    {
        return this.unix;
    }
    getSetting()
    {
        return this.setting;
    }
}
module.exports={POManager};