import { useState } from "react"

const api = {
  key: `1a8e55094ddb797a0718c407c2c9dbc3`,
  base: `https://api.openweathermap.org/data/2.5/`
}

export default function App () {

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({})

    const searchPressed = () =>{
      fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {setWeather(result)})
      
    }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather App</h1>
          <div>
            <input 
              type="text" 
              placeholder="Enter City Here"
              onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={searchPressed}>Search</button>
          </div>

        {typeof weather.main != 'undefined' ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
          ) : (
            ''
          )}
        
        
        
      </header>
    </div>
  )
}

 