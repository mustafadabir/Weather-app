import React from 'react';
import Icon from './Icon';

const Weather = ({weather}) => {
  return (
     <>
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="col-md-6 col-12">
            <div className="weather">
              <h2>{weather.name}, <span>{weather.sys.country}</span></h2>
              <div className="current_weather d-flex justify-content-center ps-lg-5 ps-md-0 ">
                <div className="weather_image"><Icon icon={weather.weather[0].id}/></div>
                <h1 className='align-self-end ps-lg-4 ps-md-2'>{Math.round(weather.main.temp)}°<span>C</span></h1>
              </div>
              <h1>{weather.weather[0].main}</h1>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="weather_info">
              <ul>
                <li>Max.Temp <p>{Math.round(weather.main.temp_max)}°<span>c</span></p></li>
                <li>Wind Speed <p>{Math.round(weather.wind.speed)} km/h</p></li>
                <li>Visibility <p>{Math.round(weather.visibility)} mi</p></li>
                <li>Humidity <p>{Math.round(weather.main.humidity)} %</p></li>
                <li>Feels like <p>{Math.round(weather.main.feels_like)}°<span>c</span></p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather;