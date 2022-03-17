import { useWeather } from '../../context/WeatherContext';
function DailyWeather() {
  const { weatherData, isLoading } = useWeather();
  console.log(weatherData);

  const dateTime = (time) => {
    return new Date(time * 1000).toLocaleDateString('tr', {
      weekday: 'long',
    });
  };
  return (
    <div className="dailyContainer">
      <h2>Haftalık Tahmin</h2>
      <ul>
        {!isLoading &&
          weatherData.daily
            .filter((date, index) => index !== 0)
            .map((date, index) => (
              <li key={index}>
                <h3>{dateTime(date.dt)}</h3>
                <img
                  src={require(`../../icons/${date.weather[0].icon}.svg`)}
                  alt=""
                />
                <span>{Math.round(date.temp.day)}°</span>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default DailyWeather;
