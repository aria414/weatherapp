import React from "react";
import './App.css'
const WeatherDisplay = ({city, colorKey} ) => {
    // city.weather[0].description - For some reason the |city| object has a |weather| key that holds an |array| with 1 item...
    // So need to get that first item and get its description.
    // colorKey is destructured from the props object. in Apps.js. Since that key only has 1 string,  can use colorKey directly to access the string
    console.log("props: ", colorKey)

    const loaded = () => {
        return ( 
            <div className="weather">
             <h2>{city.name}</h2>
             <h2 style={{color: colorKey}}>{city.main.temp} &#176; F</h2>
             <p>Min - {city.main.temp_min} &#176; F</p>
             <p>Max - {city.main.temp_max} &#176; F</p>
             <h2>{city.weather[0].description}</h2>
            </div>
        )
    }

    const loading = () => {
        return  <h1>No weather to Display</h1>
    }

    return city ? loaded() : loading()
}

export default WeatherDisplay