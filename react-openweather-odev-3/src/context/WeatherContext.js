import { useState, createContext, useContext, useEffect } from 'react';
const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({
    city: 'Adana',
    lat: '37.00167',
    long: '35.32889',
  });
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const values = {
    selectedCity,
    setSelectedCity,
    weatherData,
    setWeatherData,
    isLoading,
    setIsLoading,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const useWeather = () => useContext(WeatherContext);
