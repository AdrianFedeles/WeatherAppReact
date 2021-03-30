import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DayForecast from './DayForecast';
import Forecast from './Forecast';
import GeneralTemperature from './generalTemperature';

var json = [{
    date : "Sat 27",
    icon : "//cdn.weatherapi.com/weather/64x64/day/176.png",
    maxC :  14,
    minC : 0,
    status : "Patchy rain possible" 
}, {
  date : "Sat 27",
  icon : "//cdn.weatherapi.com/weather/64x64/day/176.png",
  maxC :  14,
  minC : 0,
  status : "Patchy rain possible" 
}, {
  date : "Sat 27",
  icon : "//cdn.weatherapi.com/weather/64x64/day/176.png",
  maxC :  14,
  minC : 0,
  status : "Patchy rain possible" 
}, {
  date : "Sat 27",
  icon : "//cdn.weatherapi.com/weather/64x64/day/176.png",
  maxC :  14,
  minC : 0,
  status : "Patchy rain possible" 
},{
  date : "Sat 27",
  icon : "//cdn.weatherapi.com/weather/64x64/day/176.png",
  maxC :  14,
  minC : 0,
  status : "Patchy rain possible" 
}]

ReactDOM.render(
  <React.StrictMode>
      <Forecast info={json}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
