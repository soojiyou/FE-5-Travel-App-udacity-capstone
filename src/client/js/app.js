// import { geonames } from "../../server/apiInfo";
const geonamesAPI = require('../../server/geonamesAPI');
const weatherbitAPI = require('../../server/weatherbitAPI');
const pixabayAPI = require('../../server/pixabayAPI');

// /* Global Variables */
// const searchval = document.getElementById('zip');
// //const namekey = 
// //const feelings = document.getElementById('feelings');
const generate = document.getElementById('generate');
const submit = document.getElementById('submit');
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

// async function fetchapi() {
//     try {
//         let destinationData = await geonamesAPI.geonames(request.body.destination, process.env.GEONAME_KEY);
//         let weatherData = await weatherbitAPI.weatherbit(
//             destinationData.latitude,
//             destinationData.longitude,
//             tripinfo.date,
//             process.env.WEATHERBIT_KEY
//         );
//         let imageData = await pixabayAPI.pixabay(request.body.destination, country, process.env.PIXABAY_KEY);
//         let departure = request.body.departure;
//         let date = request.body.date;

//         console.log(destinationData, weatherData, imageData, departure, date);
//         return destinationData, weatherData, imageData, departure, date;

//     } catch (e) {
//         console.log("Error", e.message);
//     }
// }


// const selectData = async (data) => {
//     try {
//         const dataresult = {
//             date: data., //
//             temp: Math.round(data.main.temp),
//             content: feelings.value,
//             city: data.name,
//             weather: data.weather[0].description,
//         };
//         return dataresult;
//         tripinfo.departure = request.body.departure;
//         tripinfo.date = request.body.date;

//     } catch (e) {
//         console.log("Error", e.message);
//     }
// };


async function postData(data) {
    const url = '/api/information';
    const response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    //console.log(JSON.stringify(data));
    try {
        let result = response.json();
        console.log('postdata result is', result);
        return result;
    } catch (e) {
        console.log("Error", e.message);
    }
};

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field (id:name)
    //let formText = document.getElementById('name').value;
    let departurevalue = document.getElementById('departure').value;
    let destinationvalue = document.getElementById('destination').value;
    let datevalue = document.getElementById('date').value;
    let data = {
        departure: departurevalue,
        destination: destinationvalue,
        date: datevalue
    };
    console.log('data is', data);

    //let resurl = Client.validUrlChecker(formText);

    try {
        // let dataResult = postData(data);
        // console.log("handlesubmit dataResult is", dataResult);
        // displayresult(dataResult);
        let dataResult = postData(data).then((res) => { displayresult(dataResult); })

    } catch (error) { return error };

}
async function displayresult() {
    const request = await fetch('/result');
    const data = await request.json();
    document.getElementById("city").innerHTML = `City: ${data.destination.city}`;
    document.getElementById("country_code").innerHTML = `Country Code: ${data.destination.country_code}`;
    document.getElementById("latitude").innerHTML = `Latitude: ${data.destination.latitude}`;
    document.getElementById("longitude").innerHTML = `Longitude: ${data.destination.longitude}`;
    // document.getElementById("citypic").innerHTML = `dataResult.destination.pixabay_webformatURL`;
    document.getElementById("weather").innerHTML = `Weather`;
    document.getElementById("selecteddate").innerHTML = `Travel Date: ${data.date}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${Math.round(data.weather.temperature)} degrees`;
    document.getElementById("description").innerHTML = `Description: ${data.weather.description}`;
    //document.getElementById("weatherpic").innerHTML = `dataResult.weather.icon`;

    // document.getElementById("country").innerHTML = `dataResult.country`;
    // const createDiv1 = document.createElement('div');
    // const createDiv2 = document.createElement('div');
    const divforweatherpic = document.getElementById('weatherpic');
    const divforcitypic = document.getElementById('citypic');
    // createDiv1.setAttribute("class", "card1");
    // divforweatherpic.appendChild(createDiv1);
    // createDiv2.setAttribute("class", "card2");
    // divforcitypic.appendChild(createDiv2);
    const cityimage = data.destination.pixabay_webformatURL;
    const weatherimage = data.weather.icon;

    divforcitypic.innerHTML = `<img src="${cityimage}">`;
    divforweatherpic.innerHTML = `<img src="${weatherimage}">`;


}
// async function updatePic() {
//     const request = await fetch('/result');
//     const data = await request.json();
//     const createDiv1 = document.createElement('div');
//     const createDiv2 = document.createElement('div');
//     const divforweatherpic = document.getElementById('weatherpic');
//     const divforcitypic = document.getElementById('citypic');
//     createDiv1.setAttribute("class", "card1");
//     divforweatherpic.appendChild(createDiv1);
//     createDiv2.setAttribute("class", "card2");
//     divforcitypic.appendChild(createDiv2);
//     const cityimage = data.destination.pixabay_webformatURL;
//     const weatherimage = data.weather.icon;

//     createDiv1.innerHTML = `<img src="${cityimage}">`;
//     createDiv2.innerHTML = `<img src="${weatherimage}">`;
// }

// const searchAndUpdateData = async () => {
//     const request = await fetch('/result');
//     try {
//         const dataResult = await request.json()
//         console.log(dataResult)
//         // Write updated data result to DOM elements
//         document.getElementById("city").innerHTML = dataResult.destination.city;
//         document.getElementById("country_code").innerHTML = dataResult.destination.country_code;
//         document.getElementById("latitude").innerHTML = dataResult.destination.latitude;
//         document.getElementById("longitude").innerHTML = dataResult.destination.longitude;
//         // document.getElementById("citypic").innerHTML = dataResult.destination.pixabay_webformatURL;
//         document.getElementById("weather").innerHTML = 'Weather';
//         document.getElementById("selecteddate").innerHTML = dataResult.date;
//         document.getElementById("temperature").innerHTML = Math.round(dataResult.weather.temperature) + 'degrees';
//         document.getElementById("description").innerHTML = dataResult.weather.description;
//         //document.getElementById("weatherpic").innerHTML = dataResult.weather.icon;

//         // document.getElementById("country").innerHTML = dataResult.country;

//     }
//     catch (e) {
//         console.log("Error", e.message);
//     }
// }




// submit.addEventListener("click", serverActionStep);


// function serverActionStep(event) {
//     event.preventDefault();
//     postData("/api/information")
//         .then((data) => {
//             searchAndUpdateData("/result", data)
//                 .then((data) => {
//                     updatePic("/result", data)
//                 });

//         });


// }

//submit.addEventListener("click", handleSubmit());


module.exports = {
    displayresult,
    postData,
    handleSubmit,
};