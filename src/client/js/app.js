// import { geonames } from "../../server/apiInfo";
// /* Global Variables */
// const searchval = document.getElementById('zip');
// //const namekey = 
// //const feelings = document.getElementById('feelings');
const generate = document.getElementById('generate');
const submit = document.getElementById('submit');
//import { useNavigate } from "react-router-dom";
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

// function showHide() {
//     let formdiv = document.getElementsByClassName('hiding');
//     let resultdiv = document.getElementsByClassName('hiding');
//     // if (div.style.display == 'none') {
//     //     div.style.display = 'flex';
//     // }
//     // else {
//     //     div.style.display = 'none';
//     // }

// }
async function handleSubmit(event) {
    // document.getElementsByClassName('enh').classList.add('entry');
    // document.getElementById('hiding').addEventListener('submit', function (event) {
    //     // Do something with the form's data here
    //     this.style['display'] = 'none';
    // });
    event.preventDefault();
    let formdiv = document.getElementById('formh');
    let resultdiv = document.getElementById('resulth');
    formdiv.classList.add("disnone");
    resultdiv.classList.add("disflex");

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

    try {
        //document.getElementById('hiding').style.display = 'none';
        //document.getElementById('second').style.display = '';
        // let dataResult = postData(data);
        // console.log("handlesubmit dataResult is", dataResult);
        // displayresult(dataResult);
        let dataResult = postData(data).then((res) => { displayresult(dataResult); });
        //document.getElementById('hiding').classList.add('hide');
    } catch (error) { return error };

}
function countdowndays(dday) {
    const d = new Date().getTime();
    const departureDate = new Date(dday).getTime();
    const interval = departureDate - d;
    const days = Math.floor(interval / (24 * 60 * 60 * 1000));
    console.log('days:', days);
    return days;
}
async function displayresult() {
    const request = await fetch('/result');
    const data = await request.json();
    const departuredate = data.date;
    const days = countdowndays(departuredate);
    console.log('departday', departuredate);
    document.getElementById("title").innerHTML = `My trip`;
    document.getElementById("travelresult").innerHTML = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
    document.getElementById("cityinfo").innerHTML = `Destination Information:`;
    document.getElementById("traveldepart").innerHTML = `Departing: ${data.date}`;
    document.getElementById("traveldepartinfo").innerHTML = `My trip (${data.destination.city}, ${data.destination.country_code}) is ${days} days away.`;
    document.getElementById("city").innerHTML = `City: ${data.destination.city}`;
    //document.getElementById("country_code").innerHTML = `Country Code: ${data.destination.country_code}`;
    document.getElementById("citygeo").innerHTML = `Latitude: ${data.destination.latitude}, Longitude: ${data.destination.longitude}`;
    // document.getElementById("latitude").innerHTML = `Latitude: ${data.destination.latitude}`;
    // document.getElementById("longitude").innerHTML = `Longitude: ${data.destination.longitude}`;
    // document.getElementById("citypic").innerHTML = `dataResult.destination.pixabay_webformatURL`;
    document.getElementById("weather").innerHTML = `Weather of Travel Date:`;
    document.getElementById("selecteddate").innerHTML = `Date: ${data.date}`;
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

async function updateSaveTrip() {

    const cityname = document.getElementById("travelresult").value;
    const destitle = document.getElementById("cityinfo").value;
    const departdate = document.getElementById("traveldepart").value;
    const createDiv = document.createElement('div');
    const divfortrip = document.getElementsByClassName('save');
    createDiv.classList.add("card");
    divfortrip.appendChild(createDiv);
    createDiv.innerHTML = `My Trips:` + "/n" +
        cityname + "/n" +
        destitle + "/n" +
        departdate;
    // console.log(trips);

}


module.exports = {
    countdowndays,
    displayresult,
    postData,
    handleSubmit,
    updateSaveTrip,
};