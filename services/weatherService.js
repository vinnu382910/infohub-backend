const axios = require("axios");
const { weatherApiKey } = require("../config/apiConfig");

exports.getWeatherByCity = async (city) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=imperial`;
    const response = await axios.get(apiUrl);

    const data = response.data;

    return {
      city: data.name,
      temperature: `${Math.round(data.main.temp)}°F`,
      feels_like: `${Math.round(data.main.feels_like)}°F`,
      condition: data.weather[0].description,
      humidity: `${data.main.humidity}%`,
      wind_speed: `${Math.round(data.wind.speed)} mph`,
    };
  } catch (err) {
    console.error("WeatherService Error:", err.message);
    throw new Error("Could not fetch weather data. Try another city or try again later.");
  }
};
