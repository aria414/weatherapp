import './App.css';
import React from  'react'
import Form from './Form'
import WeatherDisplay from './WeatherDisplay'

function App() {

  /* ------------------- DECLARING MY STATES... -----------------*/
  const apiKey = "214d1932f62c386accfc9c28b2092a09"
  // Make a state for the location displaying
  const [location, setLocation] = React.useState(null)

  // Make a state for the locaiton you are entering
  const [formData, setFormData] = React.useState( {
    searchterm: ""
  })

  const [temperColor, setTemperColor] = React.useState("")

  /* -------------FUNCTIONS TO HANDLE SEARCH AND SET -----------*/
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("you submitted: ", formData.searchterm)
    getWeather(formData.searchterm)
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]:event.target.value})
    //console.log("you typed: ", event.target.value)
  }

  const getWeather = async (searchTerm) => {
    //Try parsing the searchTerm into an Integer to see if it is a number
    //Set the results in searchType
    const searchType = parseInt(searchTerm)
    console.log("type of searchTerm: ", searchType)
    let url = ""

    //Check if searchType is a number.  if it is not a number, check with cities url
    if (searchType !=="number") {
       url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&&units=imperial&appid=${apiKey}`
    }

    //If it is a number, check with zip code url
    if (searchType > 0) {
       url = `https://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&units=imperial&appid=${apiKey}`
    }

    console.log("url is ", url)
    const response = await fetch(url)

    // Parse JSON response into javasctipt object
    const data = await response.json()
    console.log("data is: ", data)
    setLocation(data)
    
    if (data.main.temp >= 90) {
      setTemperColor("red")
    }
    if (data.main.temp <= 40) {
      setTemperColor("blue")
    }
    
  }

  /* --------------------- RETURNING STUFF ... -----------------*/
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      <WeatherDisplay 
        city={location} 
        colorKey={temperColor}
      />
    </div>
  );
}

export default App;
