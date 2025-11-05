const axios = require("axios");
const { exchangeApiKey, exchangeApiUrl } = require("../config/apiConfig");

exports.convertINR = async (amount) => {
  if (!exchangeApiKey || !exchangeApiUrl) {
    // Mock rates (approx)
    const usd = +(amount * 0.012).toFixed(2);
    const eur = +(amount * 0.011).toFixed(2);
    return { amountINR: amount, usd, eur, source: "mock" };
  }

  const url = exchangeApiUrl
    .replace("{KEY}", exchangeApiKey)
    .replace("{BASE}", "INR");

  const response = await axios.get(url);
  const rates = response.data.conversion_rates || response.data.rates;
  const usd = +(amount * rates.USD).toFixed(2);
  const eur = +(amount * rates.EUR).toFixed(2);

  return { amountINR: amount, usd, eur, source: "live" };
};
