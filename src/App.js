import './App.css';
import React, { useState } from 'react';
import { fetchWeather } from './fetchWeather';

function App() {
  const [city, setCity] = useState('')
  const [weather,setWeather] = useState('')

  const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await fetchWeather(city);

        setWeather(data);
        setCity('');
    }
}


  return (
      <div>
        <div className="text"> 
        <div className='heading'>Enter a city Name</div>
         <input type="text" placeholder="search ..." value={city} onKeyPress={search} onChange={(e)=>setCity(e.target.value)}/>
         {weather.main && (
         <div className="box">
                <div className="city">
                    <h2 className="city-name">
                        <span className={{fontsize:'15'}}>{weather.name}</span>
                        <sup className="city-code">{weather.sys.country}</sup>
                    </h2>
                    <div className="degree">
                        {Math.round(weather.main.temp)}
                        <sup className={{fontsize:'10'}}>&deg;c</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
         </div>
            )}
        </div>
      </div>
  );
}

export default App;
