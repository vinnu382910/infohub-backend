const weatherService = require("../services/weatherService");
const { handleError } = require("../utils/errorHandler");

// Fetching weather data based on user query or default city

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city || "Hyderabad"; // Default city
    const weatherData = await weatherService.fetchWeather(city);
    res.json(weatherData);
  } catch (error) {
    handleError(res, error, "Could not fetch weather data. Try another city or try again later.");
  }
};
