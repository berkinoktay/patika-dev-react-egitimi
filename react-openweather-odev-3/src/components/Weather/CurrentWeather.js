import { useWeather } from '../../context/WeatherContext';

function CurrentWeather() {
  const { selectedCity, weatherData } = useWeather();
  console.log(weatherData);
  return (
    <div>
      <div className="cityInfo">
        <h1>{selectedCity.city}</h1>
        {/* <img
          src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default CurrentWeather;
