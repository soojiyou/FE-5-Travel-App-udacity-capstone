// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

// var storedValue = localStorage.getItem("email");

// class StoredTrip extends StoredWeather {
//     tripnum = 0;
//     destinationinfo = "";
//     departdateinfo = "";
//     geo = "";
//     constructor(num, cityinfo, departdate, geo) {
//         this.tripnum = num;
//         this.destinationinfo = cityinfo;
//         this.departdateinfo = departdate;
//         this.geo = geo;
//     }
//     // leftdaycalc() {
//     //     const d = new Date().getTime();
//     //     const departureDate = new Date(this.departdateinfo).getTime();
//     //     const interval = departureDate - d;
//     //     const days = Math.floor(interval / (24 * 60 * 60 * 1000));
//     //     console.log('days:', days);
//     //     return days;
//     // }
// }

// class StoredWeather {
//     date = "";
//     temp = "";
//     description = "";
//     constructor(date, temp, description) {
//         this.date = date;
//         this.temp = temp;
//         this.description = description;
//     }
// }

// async function store() {
//     const request = await fetch('/result');
//     const data = await request.json();
//     const departuredate = data.date;
//     //const days = countdowndays(departuredate);
//     console.log('departday', departuredate);
//     const item1 = document.getElementById("traveldepartinfo");
//     const item2 = document.getElementById("traveldepart");
//     const item3 = document.getElementById("citygeo");
//     let obj1 = new StoredTrip(1, item1, item2, item3);
//     console.log(item1, item2, item3);

//     // const weather1 = document.getElementById("selecteddate");
//     // const weather2 = document.getElementById("temperature");
//     // const weather3 = document.getElementById("description");
//     // let obj2 = StoredWeather(1, item1, item2, item3);

//     // const obj = { obj1, obj2 };


//     console.log(obj1);
//     displaysave(obj1);
// }

// function displaysave(obj = {}) {
//     const storedtrip = obj;

//     console.log(storedtrip);
//     const createDiv = document.createElement('div');
//     const divfortrip = document.getElementById('save');
//     createDiv.classList.add("card");
//     divfortrip.appendChild(createDiv);
//     createDiv.innerText = `My Trips:
//         ${storedtrip}`;

//     const createRmvBtn = document.createElement('button');
//     createRmvBtn.classList.add("remove");
//     divfortrip.appendChild(createRmvBtn);
//     createRmvBtn.innerText = `Remove`;
//     remove.addEventListener('click', removeinfo);

//     //return output.value;
// }


// function print() {
//     const createframe = document.createElement('iframe');
//     const divfortrip = document.getElementById('save');
//     createframe.setAttribute('id', 'printframe');
//     divfortrip.appendChild(createframe);
//     const createPrintBtn = document.createElement('button');
//     createPrintBtn.setAttribute('id', 'printbutton');
//     divfortrip.appendChild(createPrintBtn);
//     createPrintBtn.innerText = `Print PDF`;
//     function printfunc() {
//         var frame = document.getElementById('printframe');
//         frame.contentWindow.focus();
//         frame.contentWindow.print();
//     }

//     const printbuttontarget = document.getElementById('printbutton');
//     printbuttontarget.addEventListener('click', printfunc());

// }



// function printpdf() {
//     // const divfortrip = document.getElementById('save');
//     const printarea = document.getElementById('savediv');

//     const printbtn = document.getElementById('printbutton');
//     printbtn.addEventListener(click, function () {
//         let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
//         mywindow.document.write(`<html><head><title>My Trip</title>`);
//         mywindow.document.write('</head><body >');
//         mywindow.document.write(printarea.innerHTML);
//         mywindow.document.write('</body></html>');
//         mywindow.document.close();
//         // mywindow.focus(); // necessary for IE >= 10*/

//         mywindow.print();
//         // mywindow.close();

//         // return true;
//     })

// }

async function store() {
    const request = await fetch('/result');
    const data = await request.json();
    const departuredate = data.date;


    //const days = countdowndays(departuredate);
    console.log('departday', departuredate);
    const item1 = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
    const item2 = `Destination Information:`;
    const item3 = `Departing: ${data.date}`;
    console.log(item1, item2, item3);

    const divfortrip = document.getElementById('save');
    const createcontainerDiv = document.createElement('section');
    createcontainerDiv.setAttribute('id', 'container');
    divfortrip.appendChild(createcontainerDiv);

    displaysave(item1, item2, item3);



}



function displaysave(item1, item2, item3) {
    let storedcity = item1;
    let storedtitle = item2;
    let storeddate = item3;
    console.log(storedcity, storedtitle, storeddate);
    const createSavDiv = document.createElement('div');
    createSavDiv.setAttribute('id', 'savediv');
    const container = document.getElementById('container');
    const savediv = document.getElementById('savediv');
    container.appendChild(createSavDiv);
    createSavDiv.innerText = `My Trips: \n
        ${storedcity}  \n
        ${storedtitle}  \n
        ${storeddate}`;

    const createRmvBtn = document.createElement('button');
    createRmvBtn.setAttribute('id', 'remove');
    container.appendChild(createRmvBtn);
    createRmvBtn.innerText = `Remove`;
    const rmvclick = document.getElementById("remove")
    rmvclick.addEventListener('click', function () { container.remove() }
    );
    const createPrintBtn = document.createElement('button');
    createPrintBtn.setAttribute('id', 'printbutton');
    container.appendChild(createPrintBtn);
    createPrintBtn.innerText = `Print PDF`;

    const prtclick = document.getElementById("printbutton");
    prtclick.addEventListener('click', function printpdf() {
        const printarea = document.getElementById('savediv');
        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        mywindow.document.write(`<html><head><title>My Trip</title>`);
        mywindow.document.write('</head><body >');
        mywindow.document.write(printarea.innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close();
        // mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        // mywindow.close();

        // return true;
    });


    //return output.value;
}


// async function store() {
//     const request = await fetch('/result');
//     const data = await request.json();
//     const departuredate = data.date;
//     //const days = countdowndays(departuredate);
//     console.log('departday', departuredate);
//     const item1 = `My trip to: ${data.destination.city}, ${data.destination.country_code}`;
//     const item2 = `Destination Information:`;
//     const item3 = `Departing: ${data.date}`;
//     console.log(item1, item2, item3);
//     displaysave(item1, item2, item3);
// }
// async function displayTrip(trip) {
//     const request = await fetch('/result');
//     const data = await request.json();
//     const departuredate = data.date;
//     let template = document.getElementById('save').content.cloneNode('true');
//     // set id
//     template.firstElementChild.id = data.id;
//     // set values for trip:
//     let tripDetails = template.firstElementChild.children;
//     // set destination
//     tripDetails[1].textContent = `${data.destination.city},${data.destination.country_code}`;
//     // set date
//     tripDetails[2].textContent = `departing: ${data.date}`;
//     // set countdown
//     tripDetails[3].textContent = `${data.countdown} days left`;
//     // set image
//     tripDetails[4].firstElementChild.src = data.image;
//     // set weather
//     tripDetails[5].children[0].textContent = `Typical weather for that day is:\n${data.weather.temperature}C, ${data
//         .weather.description}`;
//     tripDetails[5].children[1].src = data.weather.icon;

//     // function to delete trip
//     const deleteTrip = (event) => {
//         let trips = JSON.parse(localStorage.trips);
//         // console.log('deleting\n', trips, '\n', event.target);
//         trips.forEach((element) => {
//             if (element.id == event.target.parentElement.id) {
//                 trips.splice(trips.indexOf(element), 1);
//                 localStorage.trips = JSON.stringify(trips);
//                 event.target.parentElement.classList.add('hide');
//             }
//         });
//     };
//     tripDetails[8].onclick = deleteTrip;
//     // add saved trip to the web page
//     let trips = document.getElementsByClassName('trips')[0];
//     trips.appendChild(template);
// };

// const saveTrip = () => {
//     let trip = JSON.parse(sessionStorage.newTrip);
//     console.log('Saving..');
//     let trips = [];
//     // create trips if it doesn't exist
//     if (localStorage.trips != undefined) {
//         trips = JSON.parse(localStorage.trips);
//     }
//     // generate id
//     let id = new Date().getTime();
//     data.id = id;
//     trips.push(data);
//     localStorage.trips = JSON.stringify(trips);
//     console.log('trip is saved: ', data.destination.city);
//     document.getElementById('new-trip').classList.add('hide');
//     displayTrip(data);
// };

// const displayTrips = () => {
//     let trips = [];
//     // create trips if it doesn't exist
//     if (localStorage.trips != undefined) {
//         trips = JSON.parse(localStorage.trips);
//     }
//     // function to sort trips by date
//     const sortTripsByDate = (trip1, trip2) => {
//         return new Date(trip1.date) - new Date(trip2.date);
//     };
//     trips = trips.sort(sortTripsByDate);
//     // console.log(trips);
//     trips.forEach(displayTrip);
// };

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
    store,

};