/**
 * Created by patterncoder on 5/4/2015.
 */

var siteSettings = {};

// integers correspond to menuID
siteSettings.apis = {baseUrl: "http://oldtowndining.com/api/",
    otdMenus: "menu.ashx?menuID=",
    otdWineList: "wineList.ashx?menuID=",
    otdEntertainment: "entertainment.ashx?date=",
    otdEvents: "events.ashx?date=",
    otdBanquets: "banquets.ashx?date=",
    otdDjs: "djSchedule.ashx?date="
}
siteSettings.menus = {main: 602, 
                        partyHors: 374,
                        partyDessert: 373,
                        partyRental: 375,
                        beersAndMore: 611,
                        wineList: 613,
                        spirits: 601,
                        cocktails: 605,
                        bottles: 610}
                        
siteSettings.utilDateBack = -20;

module.exports = siteSettings;
