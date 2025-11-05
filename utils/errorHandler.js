exports.handleError = (res, error, message) => {
  console.error("Error:", error.message);
  res.status(500).json({ error: message });
};
