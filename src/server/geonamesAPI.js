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
            //data = data.geonames[0];
            // for (i = 0; i < data.geonames.length; i++) {
            // let i = 0;
            // while (i < data.geonames.length) {
            //     data[i] = data.geonames[i];
            //     dataset[i] = {
            //         latitude: data[i].lat.slice(0, 6),
            //         longitude: data[i].lng.slice(0, 6),
            //         country_code: data[i].countryCode,
            //         city: data[i].name
            //     }
            //     i++;
            //     return dataset[i];
            // }
            data = data.geonames[0];
            // dataset = {
            //     latitude: data.lat.slice(0, 6),
            //     longitude: data.lng.slice(0, 6),
            //     country_code: data.countryCode,
            //     city: data.name
            // }
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


// const fetch = require('node-fetch');

// const geonames = async (city = '', key) => {
//     const url = `http://api.geonames.org/search?username=${key}&type=json&name=`;

//     let response = await fetch(url + city);
//     console.log('Geonames API: ', response.status, response.statusText, response.ok);

//     if (response.ok) {
//         let data = await response.json();
//         // console.log(data, data.geonames);
//         if (data.geonames.length > 0) {
//             data = data.geonames[0];
//             return {
//                 latitude: data.lat.slice(0, 6),
//                 longitude: data.lng.slice(0, 6),
//                 country_code: data.countryCode,
//                 city: data.name
//             };
//         }
//     } else {
//         console.log(`ERROR: code ${response.status} ${response.statusText}.`);
//     }
//     return {
//         latitude: 'no data',
//         longitude: 'no data',
//         country_code: 'no data',
//         city: 'no data'
//     };
// };

module.exports = { geonames };