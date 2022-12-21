import React from "react";   

class CurrentWeather extends React.Component { 
    render() {
        return (
            <div className="current_weather">
              <img src={this.props.imageSrc(this.props.FakeWeatherNow.weather[0].id)} alt="cloudy" />
              <h2>{this.props.FakeWeatherNow.weather[0].description}</h2>
            
              <div className="current_weather_info">
                <p className="current_temperature"><b>Temperature</b> <span>{this.props.FakeWeatherNow.main.temp_min.toFixed(2)}</span> to <span>{this.props.FakeWeatherNow.main.temp_max.toFixed(2)} &#8451;</span></p>
                <p className="current_humidity"><b>Humidity</b> <span>{this.props.FakeWeatherNow.main.humidity}%</span> <b>Pressure</b>  <span>{Math.round(this.props.FakeWeatherNow.main.pressure)}</span></p>
              </div>

            </div>
        )
    }
}


export default CurrentWeather;