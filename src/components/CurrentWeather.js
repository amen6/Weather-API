import React from "react";   
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"

class CurrentWeather extends React.Component { 
    render() {
        return (
            <div class="current_weather">
              <img src={mostlycloudy} alt="cloudy" />
              <h2>overcast cloud</h2>
            
              <div className="current_weather_info">
                <p className="current_temperature"><b>Temperature</b> <span>10</span> to <span>11 &#8451;</span></p>
                <p className="current_humidity"><b>Humidity</b> <span>78%</span> <b>Pressure</b>  <span>1008.48</span></p>
              </div>

            </div>
        )
    }
}


export default CurrentWeather;