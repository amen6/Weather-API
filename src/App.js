import React, { Component } from "react";


import "./App.css";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import DayWeather from "./components/DayWeather";
import FakeWeather from './data/FakeWeather.json';

import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {


  render() {
    const imageSrc = (image) => {
      switch (image) {
        case "clouds":
          return cloudy;
        case "mostlycloudy":
          return mostlycloudy;
        case "partlycloudy":
          return partlycloudy;
        case "snow":
          return snow;
        case "storm":
          return storm;
        case "rain":
          return rain;
        case "fog":
          return fog;
        case "drizzle":
          return drizzle;
        case "clear":
          return clear
      }
    };
    return (
      <div className="app">
          <Navbar/>

          <main className="content">
            <CurrentWeather FakeWeatherNow={FakeWeather.list[0]} imageSrc={imageSrc}/>
            <DayWeather FakeWeather={FakeWeather} imageSrc={imageSrc}/>
          </main>
      </div>
    );
  }
}

export default App;
