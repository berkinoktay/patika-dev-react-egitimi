import { useWeather } from '../context/WeatherContext';
import { useEffect } from 'react';
import axios from 'axios';
import DailyWeather from './Weather/DailyWeather';
import CurrentWeather from './Weather/CurrentWeather';
function Container() {
  const { selectedCity, setWeatherData, weatherData, setIsLoading } =
    useWeather();

  const api_data = {
    url: 'https://api.openweathermap.org/data/2.5/onecall',
    key: '8dbebdb52e5b9f3e16b5b2c3b0c3433c',
  };
  useEffect(() => {
    console.log(selectedCity);
    axios(
      `${api_data.url}?lat=${selectedCity.lat}&lon=${selectedCity.long}&exclude=minutely,hourly&lang=tr&units=metric&APPID=${api_data.key}`
    )
      .then((res) => {
        setWeatherData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedCity]);
  return (
    <div className="mainContainer">
      <CurrentWeather />
      <DailyWeather />
    </div>
  );
}

export default Container;
