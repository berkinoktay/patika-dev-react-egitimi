import { useWeather } from '../../context/WeatherContext';
import CitiesData from '../../json/cities.json';
function CurrentWeather() {
  const {
    selectedCity,
    setSelectedCity,
    weatherData,
    isLoading,
    setIsLoading,
  } = useWeather();

  const capitalizeCity = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };
  const getSelectedData = (e) => {
    setSelectedCity({
      city: capitalizeCity(e.target.value),
      lat: e.target[e.target.selectedIndex].dataset.lat,
      long: e.target[e.target.selectedIndex].dataset.long,
    });
  };
  const dateTime = {
    date:
      !isLoading &&
      new Date(weatherData.current.dt * 1000).toLocaleDateString('tr', {
        weekday: 'long',
      }),
    time:
      !isLoading &&
      new Date(weatherData.current.dt * 1000).toLocaleTimeString('tr', {
        hour: '2-digit',
        minute: '2-digit',
      }),
  };
  return (
    <div className="currentContainer">
      <div className="city">
        <select name="cities" onChange={getSelectedData}>
          {CitiesData.map((city) => (
            <option
              key={city.plate}
              value={city.name}
              data-long={city.longitude}
              data-lat={city.latitude}
            >
              {capitalizeCity(city.name)}
            </option>
          ))}
        </select>
        <h1>{selectedCity.city}</h1>
      </div>
      <div className="currentInfo">
        <div className="imageBox">
          {!isLoading && (
            <img
              src={require(`../../icons/${weatherData.daily[0].weather[0].icon}.svg`)}
              alt=""
            />
          )}
          <h2>{!isLoading && weatherData.daily[0].weather[0].description}</h2>
        </div>
        <div className="tempBox">
          <p>
            {dateTime.date}, <span>{dateTime.time}</span>
          </p>
          <div className="temp">
            <p>
              {!isLoading && Math.round(weatherData.daily[0].temp.day)}
              <span>°C</span>
            </p>
          </div>
        </div>
        {/* <h2>{!isLoading && weatherData.current.weather[0].description}</h2> */}
      </div>
    </div>
  );
}

export default CurrentWeather;
