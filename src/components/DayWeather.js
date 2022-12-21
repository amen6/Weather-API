import React from 'react'

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"
import DayWeatherItem from './DayWeatherItem';

class DayWeather extends React.Component {
    render() { 
        return ( 
              <div className="day_weather_container">

              {this.props.FakeWeather.list.map((element,index) => {
                if (index>=1 && index<8){
                  return <DayWeatherItem time={element.dt_txt} svg={element.weather[0].main.toLowerCase()} temp={element.main.temp} imageSrc={this.props.imageSrc} key={element.dt}/>
                }}
              )}
            </div>
         );
    }
}
 
export default DayWeather;