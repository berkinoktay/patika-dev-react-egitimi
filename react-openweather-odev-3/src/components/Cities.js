import CitiesData from '../json/cities.json';
import { useWeather } from '../context/WeatherContext';
function Cities() {
  const { setSelectedCity } = useWeather();

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
  return (
    <div className="cityContainer">
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
    </div>
  );
}

export default Cities;
