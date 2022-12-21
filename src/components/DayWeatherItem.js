import React from 'react'

class DayWeatherItem extends React.Component {
    render() { 
        return (
            <div className="day_weather_part">
                  <time>{this.props.time.slice(11, 16)}</time>
                  <img src={this.props.imageSrc(this.props.svg)} alt="Weather Image"></img>
                  <p>{Math.round(this.props.temp- 273.15)}</p>
            </div>
        );
    }
}
 
export default DayWeatherItem;
