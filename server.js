// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const port = 3100;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// app.post('/add', async (req, res) => {
//     const info = await req.body;
//     projectData = info;
//     res.send(projectData);
// });


app.post('/add', addData);

async function addData(request, response) {

    let data = await request.body;

    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["content"] = data.content;
    projectData["city"] = data.city;
    projectData["weather"] = data.weather;


    response.send(projectData);
}



app.get("/result", async (request, response) => {
    if (projectData) {
        response.send(projectData);
    }
});




function listening() {
    console.log(`listening on port ${port}`);
}

app.listen(port, listening());