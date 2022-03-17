import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({
    city: 'Adana',
    lat: '37.00167',
    long: '35.32889',
  });
  const [weatherData, setWeatherData] = useState();
  const values = {
    selectedCity,
    setSelectedCity,
    weatherData,
  };
  const api_data = {
    url: 'https://api.openweathermap.org/data/2.5/onecall',
    key: '8dbebdb52e5b9f3e16b5b2c3b0c3433c',
  };

  useEffect(async () => {
    await axios(
      `${api_data.url}?lat=${selectedCity.lat}&lon=${selectedCity.long}&exclude=minutely,hourly&lang=tr&units=metric&APPID=${api_data.key}`
    ).then((res) => setWeatherData(res.data));
  }, []);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const useWeather = () => useContext(WeatherContext);
