import React from "react";   

class CurrentWeather extends React.Component { 
    render() {
      
        console.log(this.props.FakeWeatherNow.main.temp_min)
        return (
            <div className="current_weather">
              <img src={this.props.imageSrc(this.props.FakeWeatherNow.weather[0].main.toLowerCase())} alt="cloudy" />
              <h2>overcast cloud</h2>
            
              <div className="current_weather_info">
                <p className="current_temperature"><b>Temperature</b> <span>{Math.round(this.props.FakeWeatherNow.main.temp_min - 273.15)}</span> to <span>{Math.round(this.props.FakeWeatherNow.main.temp_max - 273.15)} &#8451;</span></p>
                <p className="current_humidity"><b>Humidity</b> <span>{this.props.FakeWeatherNow.main.humidity}%</span> <b>Pressure</b>  <span>{Math.round(this.props.FakeWeatherNow.main.pressure)}</span></p>
              </div>

            </div>
        )
    }
}


export default CurrentWeather;