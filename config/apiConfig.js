// server/config/apiConfig.js
require("dotenv").config();

module.exports = {
  weatherApiKey: process.env.OPENWEATHER_KEY,
  exchangeApiKey: process.env.EXCHANGE_API_KEY,
  exchangeApiUrl: process.env.EXCHANGE_API_URL,
  quotesApiUrl: process.env.QUOTES_API_URL || "https://api.api-ninjas.com/v1/quotes",
};
