import React, { Component } from "react";


import "./App.css";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import DayWeather from "./components/DayWeather";

import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherObj: null,
      error: null,
      isLoaded: false,
    };
    this.getCityWeather = this.getCityWeather.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  getCityWeather(city) {
    try {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=ff383ffa22f1ae5e49e20b9de7d54526`)
    .then(res => {
      return res.json()
    })
    .then(jsonified => {
      console.log(jsonified)
      if(jsonified.cod === "400" || jsonified.cod === "404") {
        this.setState({error: jsonified.message, isLoaded: false})
      } else {
        this.setState({isLoaded: true, weatherObj: jsonified, error: null})
      }
    })
    .catch(err => {
      this.setState({error: err, isLoaded: false})
    })
    } catch (error) {
      console.error(error)
      this.setState({error: error, isLoaded: false})
    }
  }

   handleOnClick(data) {
   console.log(data)
  }


  render() {
    const imageSrc = (id) => {
      switch (true) {
        case (id < 300):
          return storm;
        case (300 <= id && id < 500):
          return drizzle;
        case (500 <= id && id < 600):
          return rain;
        case (600 <= id && id < 700):
          return snow;
        case (700 <= id && id < 800):
          return fog;
        case (id == 800):
          return clear;
        case (id == 801):
          return partlycloudy;
        case (801 < id && id <= 805):
          return mostlycloudy;
        default:
          return  
      }
    };


    const { error, isLoaded } = this.state;
    if (error) {
      console.log(error)
      if(error == "TypeError: Failed to fetch") {
        return <div className="app">
        <Navbar getCityWeather={this.getCityWeather} handleOnClick={this.handleOnClick}/>
        <h1 className="error">Error: {error + " please check your internet connection"}</h1></div>;
      }
      return <div className="app">
        <Navbar getCityWeather={this.getCityWeather} handleOnClick={this.handleOnClick}/>
        <h1 className="error">Error: {error + " please enter a valid city"}</h1></div>;
    } 
    return (
      
      <div className="app">
          <Navbar getCityWeather={this.getCityWeather} handleOnClick={this.handleOnClick}/>

        {this.state.isLoaded ? <main className="content">
          
            <CurrentWeather FakeWeatherNow={this.state.weatherObj ? this.state.weatherObj.list[0] : null} imageSrc={imageSrc}/>
            <DayWeather FakeWeather={this.state.weatherObj ? this.state.weatherObj : null} imageSrc={imageSrc}/>
          </main> : <h1 className="error">PLease Select a City</h1> }
          
      </div>
    );
  }
}

export default App;
