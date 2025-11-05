const axios = require("axios");
const { weatherApiKey } = require("../config/apiConfig");

exports.fetchWeather = async (city) => {
  if (!weatherApiKey) {
    return { city, tempC: 28, condition: "Clear (mock data)" };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
  const response = await axios.get(url);
  const data = response.data;

  return {
    city: data.name,
    tempC: data.main.temp,
    condition: data.weather[0].description,
  };
};
