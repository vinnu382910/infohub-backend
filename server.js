// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Route imports
const weatherRoutes = require("./routes/weatherRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Base routes
app.use("/weather", weatherRoutes);
app.use("/currency", currencyRoutes);
app.use("/quote", quoteRoutes);

// Root route
app.get("/", (req, res) => res.send(`🌍 InfoHub API is running at localhost:${process.env.PORT}`));

// Global error handler (fallback)
app.use((err, req, res, next) => {
  console.error("Global Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
