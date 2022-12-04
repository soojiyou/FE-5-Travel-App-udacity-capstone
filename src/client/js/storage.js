// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

// var storedValue = localStorage.getItem("email");

async function store() {
    // const cityname = document.getElementById("travelresult");
    // const destitle = document.getElementById("cityinfo");
    // const departdate = document.getElementById("traveldepart");
    // console.log(cityname, destitle, departdate);

    // let set1 = localStorage.setItem("cityname", cityname);
    // let set2 = localStorage.setItem("destitle", destitle);
    // let set3 = localStorage.setItem("departdate", departdate);
    // let item1 = localStorage.getItem("cityname", cityname);
    // let item2 = localStorage.getItem("destitle", destitle);
    // let item3 = localStorage.getItem("departdate", departdate);
    // console.log(set1, set2, set3);
    // console.log(item1, item2, item3);
    // displaysave(item1, item2, item3);
    const request = await fetch('/result');
    const data = await request.json();
    const departuredate = data.date;
    //const days = countdowndays(departuredate);
    console.log('departday', departuredate);
    const item1 = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
    const item2 = `Destination Information:`;
    const item3 = `Departing: ${data.date}`;
    console.log(item1, item2, item3);
    displaysave(item1, item2, item3);
}

function displaysave(item1, item2, item3) {
    let storedcity = item1;
    let storedtitle = item2;
    let storeddate = item3;
    console.log(storedcity, storedtitle, storeddate);
    const createDiv = document.createElement('div');
    const divfortrip = document.getElementById('save');
    createDiv.classList.add("card");
    divfortrip.appendChild(createDiv);
    createDiv.innerText = `My Trips: \n
        ${storedcity}  \n
        ${storedtitle}  \n
        ${storeddate}`;


    //return output.value;
}


// const request = await fetch('/result');
// const data = await request.json();
// const departuredate = data.date;
// const days = countdowndays(departuredate);
// console.log('departday', departuredate);
// document.getElementById("title").innerHTML = `My trip`;
// document.getElementById("travelresult").innerHTML = `My trip to: ${ data.destination.city }, ${ data.destination.country_code } `;
// document.getElementById("cityinfo").innerHTML = `Destination Information: `;
// document.getElementById("traveldepart").innerHTML = `Departing: ${ data.date } `;
// document.getElementById("traveldepartinfo").innerHTML = `My trip(${ data.destination.city }, ${ data.destination.country_code }) is ${ days } days away.`;
// document.getElementById("city").innerHTML = `City: ${ data.destination.city } `;
// //document.getElementById("country_code").innerHTML = `Country Code: ${ data.destination.country_code } `;
// document.getElementById("citygeo").innerHTML = `Latitude: ${ data.destination.latitude }, Longitude: ${ data.destination.longitude } `;
// // document.getElementById("latitude").innerHTML = `Latitude: ${ data.destination.latitude } `;
// // document.getElementById("longitude").innerHTML = `Longitude: ${ data.destination.longitude } `;
// // document.getElementById("citypic").innerHTML = `dataResult.destination.pixabay_webformatURL`;
// document.getElementById("weather").innerHTML = `Weather of Travel Date: `;
// document.getElementById("selecteddate").innerHTML = `Date: ${ data.date } `;
// document.getElementById("temperature").innerHTML = `Temperature: ${ Math.round(data.weather.temperature) } degrees`;
// document.getElementById("description").innerHTML = `Description: ${ data.weather.description } `;
// //document.getElementById("weatherpic").innerHTML = `dataResult.weather.icon`;



module.exports = {
    store

};