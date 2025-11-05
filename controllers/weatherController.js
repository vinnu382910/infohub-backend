const weatherService = require("../services/weatherService");
const { handleError } = require("../utils/errorHandler");

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city || "Hyderabad";
    const weatherData = await weatherService.getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
    handleError(res, error, "Could not fetch weather data. Try another city or try again later.");
  }
};
