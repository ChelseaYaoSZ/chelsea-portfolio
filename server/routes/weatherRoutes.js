import express from "express";
import { config } from "dotenv";
config();

const router = express.Router();

const apiKey = process.env.WEATHER_API_KEY;
const location = "Montreal, Canada";
const unitGroup = "metric";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${apiKey}`;

router.route("/").get(async (req, res) => {
  try {
    const weatherData = await getWeather();
    res.send(weatherData);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

async function getWeather() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return {
      temp: data.currentConditions.temp,
      icon: data.currentConditions.icon,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default router;
