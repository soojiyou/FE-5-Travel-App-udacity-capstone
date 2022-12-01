// import { geonames } from "../../server/apiInfo";

// /* Global Variables */
// const searchval = document.getElementById('zip');
// //const namekey = 
// //const feelings = document.getElementById('feelings');
// const generate = document.getElementById('generate');
// //const key = "&appid=ec700b8387676a0dc3b3ac989505350a&units=imperial";
// // const date = document.getElementById('date');
// // const temp = document.getElementById('temp');
// // const content = document.getElementById('content');
// //const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
// //const requestForm = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}";
// // const city = document.getElementById('city');
// // const weather = document.getElementById('weather');
// const latitude = document.getElementById('latitude');
// const longitude = document.getElementById('longitude');
// const country = document.getElementById('country');

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear(); //=toDateString()

// const requestData = async (currenturl) => {
//     try {
//         const response = await fetch(currenturl);
//         const result = await response.json();
//         if (result.cod != 200) {
//             return result;
//         }
//         return result;
//     } catch (e) {
//         console.log("Error", e.message);
//     }
// };

// const selectData = async (data) => {
//     try {
//         if (data.cod != 200) {
//             return data;
//         }

//         // const weatherresult = {
//         //     date: newDate, //
//         //     temp: Math.round(data.main.temp),
//         //     content: feelings.value,
//         //     city: data.name,
//         //     weather: data.weather[0].description,
//         // };
//         // return weatherresult;
//         // const geonamesresult = {
//         //     latitude: , //
//         //     longitude:,
//         //     country: ,
//         // };
//         return geonamesresult;


//     } catch (e) {
//         console.log("Error", e.message);
//     }
// };

// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: "same-origin",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     });
//     try {
//         const result = await response.json();
//         return result;
//     } catch (e) {
//         console.log("Error", e.message);
//     }
// };

// const searchAndUpdateData = async () => {
//     const request = await fetch('/result');
//     try {
//         const dataResult = await request.json()
//         console.log(dataResult)
//         // Write updated data result to DOM elements
//         document.getElementById("temp").innerHTML = Math.round(dataResult.temp) + 'degrees';
//         document.getElementById("content").innerHTML = dataResult.content;
//         document.getElementById("date").innerHTML = dataResult.date;
//         document.getElementById("city").innerHTML = dataResult.city;
//         document.getElementById("weather").innerHTML = dataResult.weather;
//         // document.getElementById("country").innerHTML = dataResult.country;

//     }
//     catch (e) {
//         console.log("Error", e.message);
//     }
// }

// const updateWeatherPic = async () => {
//     const request = await fetch('/result');
//     const weatherData = await request.json();
//     let temppic = Math.round(weatherData.temp);
//     const createDiv = document.createElement('div');
//     const divforpic = document.getElementById('weatherpic');
//     createDiv.setAttribute("class", "card");
//     divforpic.appendChild(createDiv);
//     console.log(temppic);
//     if (temppic < 32) {
//         createDiv.innerHTML = `<img src="https://cdn1.vectorstock.com/i/1000x1000/51/20/cartoon-character-weather-forecast-sign-snow-cloud-vector-24545120.jpg">`;
//     }
//     else if (temppic > 70) {
//         createDiv.innerHTML = `<img src="https://cdn0.iconfinder.com/data/icons/weater/500/vi102_11_sun_cartoon_object_logo_sunny_bright_climate-512.png">`;
//     }
//     else {
//         createDiv.innerHTML = `<img src="https://img.favpng.com/4/12/0/cloud-drawing-euclidean-vector-sun-png-favpng-aYgfTuhntALzGJ1JTquJcbSjm.jpg">`;
//     }
// }

// generate.addEventListener("click", serverActionStep);

// function serverActionStep(event) {
//     event.preventDefault();
//     geonames(searchval, namekey)
// }

// // function serverActionStep(event) {
// //     event.preventDefault();
// //     const requestURL = `${baseURI}${zip.value},${key}`;
// //     requestData(requestURL)
// //         .then((data) => {
// //             selectData(data)
// //                 .then((weatherresult) => {
// //                     postData("/add", weatherresult)
// //                         .then((data) => {
// //                             searchAndUpdateData("/result")
// //                                 .then((data) => {
// //                                     updateWeatherPic("/result")
// //                                 });


// //                         });
// //                 });

// //         });
// // }

// export {
//     requestData,
//     selectData,
//     postData,
//     searchAndUpdateData,
//     updateWeatherPic,
//     serverActionStep
// }


/* Function to POST trip data to Express app and get trip details */
const fetchTripData = async (data) => {
    //  POST request info
    const reqBodyForPost = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    // console.log(JSON.stringify(data));
    const url = '/api/coordination';
    console.log('Creating promise');
    const response = await fetch(url, reqBodyForPost);
    try {
        console.log('trying..');
        console.log('done\n');
        return response.json();
    } catch (error) {
        console.log('That is the error: ', error);
    }
};

module.exports = fetchTripData;