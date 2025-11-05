// server/services/quoteService.js
const axios = require("axios");
const { quotesApiUrl } = require("../config/apiConfig");

// Local fallback quotes , we randomly pick one if API fails
const LOCAL_QUOTES = [
  { text: "Keep going, you’re doing great!", author: "Anonymous" },
  { text: "Dream big, work hard, stay humble.", author: "Vinay" },
  { text: "Believe in yourself and magic will happen.", author: "Unknown" },
];

exports.getRandomQuote = async () => {
  try {
    if (quotesApiUrl) {
      const response = await axios.get(quotesApiUrl, {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY  // We'll configure this key
        }
      });
      const data = response.data;
    //   console.log("QuoteService: fetched from API:", data);
      // IF API returns an array of quote objects and we take the first one, but ninja will return only one quote
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        return {
          text: item.quote,
          author: item.author || "Unknown",
        };
      }
      // If weird response, fallback
      throw new Error("Bad data from API Ninjas");
    }
  } catch (err) {
    console.error("QuoteService: external API failed:", err.message);
    // Fallback to local
    const random = Math.floor(Math.random() * LOCAL_QUOTES.length);
    return LOCAL_QUOTES[random];
  }
};
