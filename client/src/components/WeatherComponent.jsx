import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faCloudRain,
  faSmog,
  faWind,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faSun,
  faMoon,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const weatherIconMap = {
  snow: faSnowflake,
  rain: faCloudRain,
  fog: faSmog,
  wind: faWind,
  cloudy: faCloud,
  "partly-cloudy-day": faCloudSun,
  "partly-cloudy-night": faCloudMoon,
  "clear-day": faSun,
  "clear-night": faMoon,
  default: faQuestionCircle,
};

const getWeatherIcon = (weatherData) => {
  const icon = weatherData.icon;
  return weatherIconMap[icon] || weatherIconMap["default"];
};

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(faQuestionCircle);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("/api/weather");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <FontAwesomeIcon
        icon={getWeatherIcon(weatherData)}
        className="text-blueGreyColor hover:text-pinkColor text-3xl"
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <FontAwesomeIcon
        icon={getWeatherIcon(weatherData)}
        className="text-blueGreyColor hover:text-pinkColor text-3xl"
      />
      <p className="text-l text-[#ebedf5]">{weatherData.temp}°C</p>
    </div>
  );
};

export default WeatherComponent;
