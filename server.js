// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware */
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3030;
const server = app.listen(port, runningServer);

function runningServer() {
  console.log(`Server is running on localhost: ${port}`);
}

/* GET ROUTE */
app.get('/getWeatherData', getData);

function getData(req, res) {
  req.send(projectData);
  console.log(projectData);
}

const weatherData = [];

/* POST ROUTE */
app.post('/sendWeatherData', sendWeatherData);

function sendWeatherData(req, res) {
  const body = req.body;
  console.log(body);

  const newWeather = {
    temperature: body.temperature,
    date: body.date,
    userResponse: body.userResponse,
  };
  weatherData.push(newWeather);
  res.send(newWeather);
  console.log(newWeather);
}

app.get('/all', getWeatherData);

function getWeatherData(req, res) {
  res.send(weatherData);
  console.log(weatherData);
}