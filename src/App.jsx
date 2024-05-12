import { useState } from 'react'
import './styles.css'


const api = {
  key: `b7dea0749e34131fab7f854992d8b946`,
  base: `https://api.openweathermap.org/data/2.5/`
}

export default function App() {

  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
    .then(response=>response.json())
    .then(result=>{setWeather(result)})
  }

  return(
    <>
      <div className="weather-container">
        <div className="header">
          <h1>Local Weather</h1>
        </div>
        <div className="search-field">
          <input type="text" 
          placeholder="Enter City Here"
          onChange={(e)=>setSearch(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key === `Enter`){
              searchPressed()
            }
          }}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
          {typeof weather.main != 'undefined' ? ( <div className="city">
            <p>{weather.name}</p>
          </div> ) : ('')}
          {typeof weather.main != 'undefined' ? (<div className="conditions">
            <div className="temp">
              <p>{Math.round(weather.main.temp)}°F</p>
            </div>
            <div className="humid">
              <p>Humid </p>
              <p>{weather.main.humidity}</p>
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              <p>{weather.wind.speed} mph</p>
            </div>
            <div className="clouds">
              <p>Cloud Coverage</p>
              <p>{weather.clouds.all}%</p>
            </div>
            <div className="feels">
              <p>Feels Like</p>
              <p>{Math.round(weather.main.feels_like)}</p>
            </div>
            </div> ) : ('')}
      </div>
    </>
  )
}


