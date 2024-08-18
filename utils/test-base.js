//import{test as base} from "@playwright/test";
const base =  require('@playwright/test');
exports.customtest = base.test.extend(
{
       testdataforLogin : {
        username : "agent10@gmail.com",
        password : "Simplify360@@"
    },
    testdataforinvalidLogin : {
        username : "agent10@gmail.com",
        password : "Simplify360"
    },

    changeWSname : {

        namechange : `test${Math.floor(Math.random() * 999) + 1}`
    },
    ticketidsearch: {

        ticketid : "HGUF-1812",
        tickettext : "hello"
    },
}
);

