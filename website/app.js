/* Global Variables */
let baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=2405d8f895d0dcf587139f7519ea1049";
let generateBtn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

generateBtn.addEventListener("click", performAction);

function performAction(e) {
  const zip = document.getElementById("zip").value;
  getWeather(baseUrl + zip + apiKey);
}

const getWeather = async (url) => {
  const res = await fetch(url);
  try {
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
