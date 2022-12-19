import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"

import "./App.css";
class App extends Component {


  render() {
    return (
      <div className="app">
          <nav className="navbar">
            <input  type="text" id="search_input" placeholder="Type a city name"></input>
            <button id="search_btn">Find Wheather</button>
          </nav>

          <main className="content">

            <div class="current_weather">
              <img src={mostlycloudy} alt="cloudy" />
              <h2>overcast cloud</h2>
            
              <div className="current_weather_info">
                <p className="current_temperature"><b>Temperature</b> <span>10</span> to <span>11 &#8451;</span></p>
                <p className="current_humidity"><b>Humidity</b> <span>78%</span> <b>Pressure</b>  <span>1008.48</span></p>
              </div>

            </div>
            
            <div class="day_weather_container">
                <div class="day_weather_part">
                  <time>3:00</time>
                  <img src={mostlycloudy} alt="clear"></img>
                  <p>8&#8451;</p>
                </div>
                
                <div class="day_weather_part">
                  <time>6:00</time>
                  <img src={mostlycloudy} alt="clear"></img>
                  <p>14&#8451;</p>
                </div>

                <div class="day_weather_part">
                  <time>9:00</time>
                  <img src={clear} alt="clear"></img>
                  <p>17&#8451;</p>
                </div>

                <div class="day_weather_part">
                  <time>12:00</time>
                  <img src={clear} alt="clear"></img>
                  <p>18&#8451;</p>
                </div>

                <div class="day_weather_part">
                  <time>15:00</time>
                  <img src={clear} alt="clear"></img>
                  <p>16&#8451;</p>
                </div>

                <div class="day_weather_part">
                  <time>18:00</time>
                  <img src={mostlycloudy} alt="clear"></img>
                  <p>13&#8451;</p>
                </div>

              </div>
        </main>
      </div>
    );
  }
}

export default App;
