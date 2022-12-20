import React from "react";

class Navbar extends React.Component { 
    render() {
        return (
            <nav className="navbar">
                <input  type="text" id="search_input" placeholder="Type a city name"></input>
                <button id="search_btn">Find Wheather</button>
            </nav>
        )
    }
}


export default Navbar;