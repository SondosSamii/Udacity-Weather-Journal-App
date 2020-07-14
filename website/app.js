/* Global Variables */
let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=2405d8f895d0dcf587139f7519ea1049';
let generateBtn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

generateBtn.addEventListener("click", performAction);

function performAction() {
  const zip = document.getElementById("zip").value;
  const userResponse = document.getElementById("feelings").value;

  getWeather(baseUrl + zip + apiKey)
    .then(function (data) {
      sendWeather('/sendWeatherData', {
        temperature: data.main.temp,
        date: d,
        userResponse: userResponse,
      });
      updateUi();
    });
}

/* Async Functions */

// GET
const getWeather = async (url) => {
  const res = await fetch(url);
  try {
    const data = res.json();
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

// POST
const sendWeather = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

const updateUi = async () => {
  const req = await fetch('/all');
  try {
    const data = await req.json();
    console.log(data);
    document.getElementById("date").innerHTML = data[0].date;
    document.getElementById("temp").innerHTML = data[0].temperature;
    document.getElementById("content").innerHTML = data[0].userResponse;
  } catch (error) {
    console.log('error', error);
  }
}