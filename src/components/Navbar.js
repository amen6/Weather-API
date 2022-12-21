import React from "react";

class Navbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          city: "",
        };
        this.searchChange = this.searchChange.bind(this)
      }

       searchChange = (e) => {
        this.setState({city: e.target.value});
        console.log(e.target.value)
        // this.props.handleOnSearchChange(e.target.value)
    }

    render() {
     
        
        return (    
            <nav className="navbar">
                <input  type="text" id="search_input" placeholder="Type a city name"
                onChange={this.searchChange}
                onKeyDown={e => {
                    if(e.key == "Enter"){
                        this.props.getCityWeather(this.state.city)
                    }
                }}
                />
                <button id="search_btn"
                onClick={() => {this.props.getCityWeather(this.state.city);}}>Find Wheather</button>
            </nav>
        )
    }
}


export default Navbar;