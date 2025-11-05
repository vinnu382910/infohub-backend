const currencyService = require("../services/currencyService");
const { handleError } = require("../utils/errorHandler");

exports.convertCurrency = async (req, res) => {
  try {
    const amount = Number(req.query.amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount. Example: ?amount=1000" });
    }

    const result = await currencyService.convertINR(amount);
    res.json(result);
  } catch (error) {
    handleError(res, error, "Currency conversion failed.");
  }
};
