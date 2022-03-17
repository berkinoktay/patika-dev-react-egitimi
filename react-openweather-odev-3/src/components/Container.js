import Cities from './Cities';
import Weather from './Weather/Weather';
import { useWeather } from '../context/WeatherContext';
function Container() {
  const { selectedCity } = useWeather();
  console.log(selectedCity);
  return (
    <div className="app">
      <Cities />
    </div>
  );
}

export default Container;
