# Udacity Capstone Project: Travel App

## Demo Website (Heroku)
https://fe-travel-app-capstone.herokuapp.com/

## Introduction

This app allows a user to enter departure, destination and deaprture date for a trip and provides destination location information (city, coutry, weather).
A user can save trip result and can see when user hit "saved trip" button on the top of app.

### Technologies Used

JavaScript - for the main programming language

HTML/CSS - for the user interface

Webpack - for module bundling

Express - for the web server

Service Workers - for offline functionality

Weatherbit API - for future weather data

Geonames API - for location data

Pixabay API - for image data

#### Links for APIs used:

* [Geonames](https://www.geonames.org/)
* [Weatherbit](https://www.weatherbit.io/api)
* [Pixabay](https://pixabay.com/api/docs/)

### Getting Started:
Requirements:

Available to check in package.json


Install Requirements and run with the following command:
``` bash
`npm install` (to install all required packages)

`npm run test` (to test app)

`npm run build-dev` (build dev side)

`npm run build-prod` (build prod side)

`npm start` (start after build)
```

## Features

### User

The user can:

    1. type departure, destination, departure date for trip to plan.
    
    
   <img src="https://user-images.githubusercontent.com/79179847/229977228-221296e1-596c-46e0-b6a2-0ac39b37f9d7.png" alt="Image Description" width="500" >
   
    
    2. save the trip information with Save button, print the trip information with Print PDF button, search new trip by clicking New Search button.
    
    
   <img src="https://user-images.githubusercontent.com/79179847/229978020-0ab7921f-c1c2-4799-a4dc-47ecf1e3baa9.png" alt="Image Description" width="500" >
   <img src="https://user-images.githubusercontent.com/79179847/229978277-703f3db5-ccf1-4d7d-92cf-7d69b06cccb4.png" alt="Image Description" width="500" >
   
    
    3. check saved trip information in Saved trip on top of website. This saved information can also be checked after refreshing the web.
   
   
   <img src="https://user-images.githubusercontent.com/79179847/229978384-0e866f5e-2934-42b5-b5d8-f413983f5dcf.png" alt="Image Description" width="500" >
    

This app allows a user to enter departure, destination and deaprture date for a trip and provides destination location information (city, coutry, weather).
A user can save trip result and can see when user hit "saved trip" button on the top of app.

### API

The API:

    return the trip information from API (Weatherbit, Geonames, Pixabay): 
    
    1. Destination Information:
        
        Picture of destination with city name, latitude, longitude
    
        My trip to: {Departure, State, Country}-{Destination, State, Country}
        
        Departing: YYYY-MM-DD
        
        My trip ({Departure}-{Destination, State, Country}) is {the number of day left to departure from today} days away.
        

    2. Weather of Travel Date Information (Example):
      
        Date: 2023-04-13
        
        Temperature: 14 degrees
        
        Description: Few clouds
        
        Picture of Weather Icon
     
   
    <img src="https://user-images.githubusercontent.com/79179847/229978925-0de21fde-6dd8-4b40-9dc7-6f63230f1c2e.png" alt="Image Description" width="500" >
     
     
     
    3. API 
    
       Pixabay : return city picture
       
       Geonames :  return latitude and logitude based on city name.
       
       Weatherbit : return weather information including weather icon. (Available for historical and future 10 days)


       
    



