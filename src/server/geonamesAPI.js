//https://github.com/Candidemile/Udacity-Capstone-Travel_App/blob/master/src/server/pixabayAPI.js
//https://github.com/thatGuyAnes/TravelB/blob/master/src/server/app.js
const fetch = require('node-fetch');

async function geonames(cityname, userkey) {
    const baseurl = 'http://api.geonames.org/searchJSON?';
    const options = `name=${cityname}&maxRows=10&username=${userkey}`;
    const searchurl = baseurl + options;
    let response = await fetch(searchurl);
    //let data = await response.json();
    //console.log("data", data);
    console.log('Geonames API: ', response.status, response.ok);
    // try {
    //     return data;
    // } catch (error) {
    //     return error;
    // }


    if (response.ok) {
        let data = await response.json();
        if (data.geonames.length > 0) {

            data = data.geonames[0];

            try {
                return {
                    latitude: data.lat.slice(0, 6),
                    longitude: data.lng.slice(0, 6),
                    country_code: data.countryCode,
                    city: data.name
                };
            } catch (error) {
                return error;
            }

        }

    } else {
        console.log(`Error: ${response.status} ${response.statusText}`);
    }
}
module.exports = { geonames };



