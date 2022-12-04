//https://billing.stripe.com/p/session/live_YWNjdF8xOWtmWFpDdTlad1JXZ2dsLF9NdjNReTQ3M2NPNlppWkFsRHBUcEJncmlHaHFxd3JZ0100lBEOVWvD
const fetch = require('node-fetch');


async function weatherbit(latitude, longitude, date, key) {
    const baseUrl = 'https://api.weatherbit.io/v2.0';
    const d = new Date().getTime();
    const today = d.toString();
    const datesplit = date.split('-');
    let historicalDate = [`${datesplit[0] - 1}`, datesplit[1], `${datesplit[2]}`];
    let historicalDateinput = historicalDate.join('-');
    const departureDate = new Date(`${date}`).getTime();
    const interval = departureDate - d;
    const days = Math.floor(interval / (24 * 60 * 60 * 1000));
    console.log(d, today, departureDate, date, days, historicalDate, historicalDateinput);
    //  If trip is today
    if (0 <= days < 1) {
        const response = await fetch(`${baseUrl}/current?lat=${latitude}&lon=${longitude}&key=${key}`);
        const result = await response.json();
        console.log('Weatherbit API for current:', response.status, response.ok);
        try {
            return {
                temperature: result.data[0].temp,
                weather_icon: 'https://www.weatherbit.io/static/img/icons/' + result.data[0].weather.icon + '.png',
                weather_description: result.data[0].weather.description
            };
        } catch (error) {
            return error;
        }
        //  If trip is within 16 days
    } else if (days >= 1 && days < 8) {
        const response = await fetch(`${baseUrl}/forecast/daily?lat=${latitude}&lon=${longitude}&key=${key}`);
        const result = await response.json();
        console.log('Weatherbit API for forcast:', response.status, response.ok);
        try {
            return {
                temperature: result.data[days - 1].temp,
                weather_icon: 'https://www.weatherbit.io/static/img/icons/' + result.data[days - 1].weather.icon + '.png',
                weather_description: result.data[days - 1].weather.description
            };
        } catch (error) {
            return error;
        }
    } else if (days >= 8) {
        console.log("Weatherbit API for history for refering: unable to define weather since the departure date is later than 7 days");
        try {

            return {
                temperature: "unable data",
                weather_icon: "unable data",
                weather_description: "unable data"
            };
        } catch (error) {
            return error;
        }
    }

    //no access for historical weather api
    //     const searchurl = `${baseUrl}/history/daily?lat=${latitude}&lon=${longitude}&start_date=${historicalDateinput}:13&end_date=${historicalDateinput}:14& key=${key} `;
    //     const response = await fetch(searchurl);
    //     const result = await response.json();
    //     console.log('Weatherbit API for history for refering:', response.status, response.ok);
    //     console.log("unable to define weather since the departure date is later than 16 days", searchurl)
    //     console.log(result);
    //     try {
    //         return result.data.temp;
    //     } catch (error) {
    //         return error;

    //     }
    // }

};

module.exports = { weatherbit };


