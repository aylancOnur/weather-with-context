import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCityName } from "../context/CityContext";

const WeatherContainer = () => {
  const API_KEY = "3fde3702425e4a829828152b3ee49305";
  const { cityName } = useCityName();
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=7&key=${API_KEY}`
    )
      .then((res) => setForecast(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [cityName]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {forecast && <h2>{forecast.city_name}</h2>}
      <div className="weather__container">
        {forecast &&
          forecast.data.map((item, index) => (
            <div key={index} className="weather__card">
              {item.datetime}
              <br />
              <img
                src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                alt={item.weather.description}
              />
              <br />
              <span>{Math.round(item.max_temp)}°</span>/
              <span>{Math.round(item.min_temp)}°</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default WeatherContainer;
