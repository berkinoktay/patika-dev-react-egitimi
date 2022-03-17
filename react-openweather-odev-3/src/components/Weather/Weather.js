import React from 'react';
import CurrentWeather from './CurrentWeather';
import Daily from './Daily';
function Weather() {
  return (
    <div className="weatherContainer">
      <CurrentWeather />
      <Daily />
    </div>
  );
}

export default Weather;
