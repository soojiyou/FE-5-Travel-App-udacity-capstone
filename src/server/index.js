const geonamesAPI = require('./geonamesAPI');
const weatherbitAPI = require('./weatherbitAPI');
const pixabayAPI = require('./pixabayAPI');


const tripinfo = {
    destination: {
    },
    weather: {
    },
}
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

var path = require('path')
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

// const port = process.env.PORT || 3100;
const PORT = process.env.PORT || 3100;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
//const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Weatherbit = require('./weatherbitAPI');
dotenv.config();
//app.use(express.static(path.join(__dirname, "public")));

// Initialize the main project folder
app.use(express.static('dist'));
//app.use(express.static('src'));

app.use(express.static("client"));

app.post('/api/information', addData);

async function addData(request, response) {

    tripinfo.departure = request.body.departure;
    tripinfo.date = request.body.date;
    //geonames API
    let destinationData = await geonamesAPI.geonames(request.body.destination, process.env.GEONAME_KEY);

    tripinfo.destination["city"] = destinationData.city;
    tripinfo.destination["country_code"] = destinationData.country_code;
    tripinfo.destination["latitude"] = destinationData.latitude;
    tripinfo.destination["longitude"] = destinationData.longitude;
    //weatherbit API
    let weatherData = await weatherbitAPI.weatherbit(
        destinationData.latitude,
        destinationData.longitude,
        tripinfo.date,
        process.env.WEATHERBIT_KEY
    );
    tripinfo.weather["temperature"] = weatherData.temperature;
    tripinfo.weather["icon"] = weatherData.weather_icon;
    tripinfo.weather["description"] = weatherData.weather_description;
    //pixabay API
    let country = destinationData.country_code;
    let imageData = await pixabayAPI.pixabay(request.body.destination, country, process.env.PIXABAY_KEY);
    tripinfo.destination["pixabay_webformatURL"] = imageData.webformatURL;
    tripinfo.destination["pixabay_pageURL"] = imageData.pageURL;
    tripinfo.destination["pixabay_tags"] = imageData.tags;
    tripinfo.destination["pixabay_type"] = imageData.type;
    //tripinfo["pixabay"] = imageData;

    console.log(tripinfo);

    response.send(tripinfo);
    console.info('** This request has been processed:\n', request.body, ' **');
}




app.get("/result", async (request, response) => {

    if (tripinfo) {
        response.send(tripinfo);
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve("src/client/service-worker.js"));
});


