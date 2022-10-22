import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.18155521167668&lon=31.38695244408998&appid=79a3a5039e496721d7bfbf3f4cb7f5c7`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>C</p>
            <o>Feels Like</o>
          </div>
          <div className='humidity'>
            <p className='bold'>%45</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>3.12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
