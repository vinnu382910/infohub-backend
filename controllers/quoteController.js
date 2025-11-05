// server/controllers/quoteController.js
const quoteService = require("../services/quoteService");
const { handleError } = require("../utils/errorHandler");

exports.getQuote = async (req, res) => {
  try {
    const quote = await quoteService.getRandomQuote();
    res.json(quote);
  } catch (error) {
    handleError(res, error, "Could not fetch quote.");
  }
};
