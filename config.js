/* Magic Mirror Config Sample

By Michael Teeuw http://michaelteeuw.nl
MIT Licensed.
*/
var config = {
    port: 8080,

    language: 'en',
    timeFormat: 12,
    units: 'imperial',

    modules: [
        {
            module: 'alert',
        },
        {
            module: 'clock',
            position: 'top_left'
        },
        {
            module: 'calendar',
            header: 'US Holidays',
            position: 'top_left',
            config: {
                calendars: [
                    {
                        symbol: 'calendar-check-o ',
                        url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
                    }
                ]
            }
        },
    {
        
]

}
},
{
    module: ‘currentweather’,
    position: ‘top_right’,
    config: {
        location: ‘Chicago’,
        locationID: ‘’, //ID from http://www.openweathermap.org
        appid: ‘#######################’
}
},
{
module: ‘weatherforecast’,
    position: ‘top_right’,
header: ‘Weather Forecast’,
config: {
    location: ‘Chicago’,
    locationID: ‘’, //ID from http://www.openweathermap.org
    appid: ‘############################’
}
},
{
    module: ‘newsfeed’,
    position: ‘bottom_bar’,
    config: {
        feeds: [
        {
            title: “ESPN”,
            url: “http://www.espn.com/espn/rss/news”
    },
{
    title: “Reuters Sports”,
    url: “http://feeds.reuters.com/reuters/sportsNews”
},
],
showSourceTitle: false,
    showPublishDate: false
}
},
{
    module: ‘MMM-NFL’,
    position: ‘middle_center’,
    config: {
        colored: true,
        helmets: true,
        reloadInterval: 10000,
        focus_on: [‘CHI’]

    }
},
]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== ‘undefined’) {module.exports = config;}