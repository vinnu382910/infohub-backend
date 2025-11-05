# 🧠 InfoHub Backend
Hey there 👋 I'm Vinay.  
This is the backend for my **InfoHub** project — part of the ByteXL Full Stack Coding Challenge.

The purpose of InfoHub is simple:  
To bring together three useful utilities in one place:
- 🌤 **Weather Information**
- 💱 **Currency Conversion (INR → USD/EUR)**
- 💬 **Motivational Quote Generator for Employees**

This backend is built with **Node.js + Express**, following a clean **MVC architecture** with proper error handling, environment-based API keys, and fallback mechanisms.

---

## 🔗 Useful Links

- ✅ **Frontend GitHub Repository:** [InfoHub Frontend](https://github.com/vinnu382910/infohub-frontend)
- ✅ **Deployed Frontend:** [InfoHub.vercel](https://infohub-frontend-eta.vercel.app/)
- ✅ **Backend GitHub Repository:** [InfoHub Backend](https://github.com/vinnu382910/infohub-backend)
- ✅ **Deployed Backend:** [https://infoHub-backend.onrender.com](https://infohub-backend-dgjb.onrender.com)

---
## 🚀 Tech Stack

| Category | Technology / Library |
|-----------|----------------------|
| Runtime | Node.js (LTS) |
| Framework | Express.js |
| HTTP Client | Axios |
| Config Management | dotenv |
| CORS | Enabled for frontend requests |
| Architecture | MVC (Controllers, Routes, Services, Config, Utils) |
| APIs Used | OpenWeatherMap, ExchangeRate-API, API Ninjas (Quotes) |

---

## ⚙️ Folder Structure

```

server/
├── config/               # Configuration (API keys, URLs)
├── controllers/          # Handles incoming requests
├── routes/               # Defines all routes
├── services/             # Contains API call logic
├── utils/                # Helper utilities (error handling)
├── .env.example          # Environment variable sample
├── server.js             # App entry point
└── package.json

````

---

## 🔐 Environment Setup

Create a `.env` file inside the `server` directory (use `.env.example` as a reference):

```env
PORT=5000

# Weather API (OpenWeather)
OPENWEATHER_KEY=your_openweather_api_key_here

# Currency API (ExchangeRate)
EXCHANGE_API_URL=https://v6.exchangerate-api.com/v6/{KEY}/latest/{BASE}
EXCHANGE_API_KEY=your_exchange_api_key_here

# Quotes API (API Ninjas)
QUOTES_API_URL=https://api.api-ninjas.com/v1/quotes
API_NINJAS_KEY=your_api_ninjas_api_key_here
````

⚠️ `.env` is ignored by Git (secured via `.gitignore`).

---

## 🧩 Running the Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinaykalva/InfoHub-Backend.git
   cd InfoHub-Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

   or if you have `nodemon`:

   ```bash
   npx nodemon server.js
   ```

4. Server runs at
   👉 `http://localhost:5000`

---

## 🌐 API Endpoints Overview

Below are all the available APIs for the InfoHub backend.
These work on port **5000** and do **not** include `/api` prefix anymore.

| #   | Method  | Endpoint    | Query Params                           | Description                                                            | Success Response                                                                                            | Error / Fallback                                                                                                                                                                   |
| --- | ------- | ----------- | -------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣ | **GET** | `/weather`  | `city` (optional, default = Hyderabad) | Fetches live weather data for the given city using OpenWeather API.    | `json { "city": "Hyderabad", "tempC": 29.7, "condition": "clear sky" }`                                     | `json { "error": "Could not fetch weather data. Try another city or try again later." }` or mock: `json { "city": "Hyderabad", "tempC": 15, "condition": "Partly cloudy (mock)" }` |
| 2️⃣ | **GET** | `/currency` | `amount` (required, e.g., 1000)        | Converts the given INR amount into USD and EUR using ExchangeRate API. | `json { "amountINR": 1000, "usd": 12, "eur": 11, "source": "mock" }`                                        | `json { "error": "Invalid amount. Example: ?amount=1000" }` or  `json { "error": "Could not fetch currency rates. Try again later." }`                                             |
| 3️⃣ | **GET** | `/quote`    | None                                   | Fetches a random motivational quote from API Ninjas.                   | `json { "text": "Do not let what you cannot do interfere with what you can do.", "author": "John Wooden" }` | Fallback: `json { "text": "Keep going, you’re doing great!", "author": "Anonymous" }`                                                                                              |
| 4️⃣ | **GET** | `/`         | None                                   | Health check endpoint for server status.                               | `"🌍 InfoHub API is running on port 5000"`                                                                  | -                                                                                                                                                                                  |

---

## 🧪 Postman Testing

To ensure reliability, I tested all APIs in **Postman** under various conditions.
Here’s a quick summary of the test coverage:

| Test Type                   | Example Request                | Expected Result            |
| --------------------------- | ------------------------------ | -------------------------- |
| ✅ Valid Weather City        | `/weather?city=London`         | 200 + Weather data         |
| ❌ Invalid Weather City      | `/weather?city=InvalidCity123` | 500 error message          |
| ✅ Valid Currency Conversion | `/currency?amount=1000`        | 200 + Conversion result    |
| ❌ Invalid Amount            | `/currency?amount=-50`         | 400 error message          |
| ✅ Quotes API Live           | `/quote`                       | 200 + API Ninjas quote     |
| ✅ Quotes API Fallback       | (Remove API key temporarily)   | 200 + Local fallback quote |

---

## 🧰 Why Axios?

I’ve used **Axios** in all service files to handle API calls because it:

* Simplifies JSON handling and error management
* Makes header injection (like API keys) clean and easy
* Provides better error stack visibility
* Works seamlessly with async/await syntax

It’s reliable and cleaner than Node’s native `https` or manual fetch setups.

---

## 💬 Why Generate Quotes from the Backend?

For security and consistency:

* Keeps the **API Ninjas key** hidden from the frontend
* Allows a **fallback mechanism** (local predefined quotes)
* Follows assignment instructions for backend-powered APIs
* Keeps frontend lightweight and secure

This way, even if external API fails, employees always get a motivational quote to keep going 💪.

---

## 🧱 Error Handling

All major API routes are wrapped with try–catch blocks and a reusable utility:

```js
res.status(500).json({ error: "Could not fetch weather data." });
```

This ensures:

* No raw API errors leak to frontend
* Clean, readable error messages
* Consistent response structure

---

## 🙌 Author

**👨‍💻 Vinay Kalva**
Full Stack Developer | Cybersecurity Enthusiast
📧 [[youremail@example.com](mailto:youremail@example.com)]
🌐 [GitHub Profile](https://github.com/vinaykalva)

---
