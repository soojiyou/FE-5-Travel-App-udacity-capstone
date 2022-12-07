
const generate = document.getElementById('generate');
const submit = document.getElementById('submit');


//post Data function
async function postData(data) {
    const url = '/api/information';
    const response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    try {
        let result = response.json();
        console.log('postdata result is', result);
        return result;
    } catch (e) {
        console.log("Error", e.message);
    }
};

//main function with submit form
async function handleSubmit(event) {

    event.preventDefault();

    //make searchform invisible after submit
    let formdiv = document.getElementById('formh');
    let resultdiv = document.getElementById('resulth');
    formdiv.classList.add("disnone");
    resultdiv.classList.add("disflex");

    //get input data value => send to each api and get displayresult
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

        let dataResult = postData(data).then((res) => { displayresult(dataResult); });
    } catch (error) { return error };

}


//function to calculate interval
function countdowndays(dday) {
    const d = new Date().getTime();
    const departureDate = new Date(dday).getTime();
    const interval = departureDate - d;
    const days = Math.floor(interval / (24 * 60 * 60 * 1000));
    console.log('days:', days);
    return days;
}

//async function to get data from api and display result
async function displayresult() {
    //wait to get response from each API
    const request = await fetch('/result');
    const data = await request.json();
    const departuredate = data.date;
    const days = countdowndays(departuredate);
    console.log('departday', departuredate);
    //add each result to each place
    document.getElementById("title").innerHTML = `My trip`;
    document.getElementById("travelresult").innerHTML = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
    document.getElementById("cityinfo").innerHTML = `Destination Information:`;
    document.getElementById("traveldepart").innerHTML = `Departing: ${data.date}`;
    document.getElementById("traveldepartinfo").innerHTML = `My trip (${data.destination.city}, ${data.destination.country_code}) is ${days} days away.`;
    document.getElementById("city").innerHTML = `City: ${data.destination.city}`;
    document.getElementById("citygeo").innerHTML = `Latitude: ${data.destination.latitude}, Longitude: ${data.destination.longitude}`;

    document.getElementById("weather").innerHTML = `Weather of Travel Date:`;
    document.getElementById("selecteddate").innerHTML = `Date: ${data.date}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${Math.round(data.weather.temperature)} degrees`;
    document.getElementById("description").innerHTML = `Description: ${data.weather.description}`;

    //set images
    const divforweatherpic = document.getElementById('weatherpic');
    const divforcitypic = document.getElementById('citypic');

    const cityimage = data.destination.pixabay_webformatURL;
    const weatherimage = data.weather.icon;

    divforcitypic.innerHTML = `<img src="${cityimage}">`;
    divforweatherpic.innerHTML = `<img src="${weatherimage}">`;

}



module.exports = {
    countdowndays,
    displayresult,
    postData,
    handleSubmit,

};