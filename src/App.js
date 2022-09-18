import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  //check cloud cover
  //Only temp function until more efficient way is implemented
  const checkClouds = (event) => {
    if(data.clouds.all >= 80) {
      return ("Heavy");
    } else if(data.clouds.all > 50 && data.clouds.all < 80) {
      return ("Moderate");
    } else if(data.clouds.all > 20 && data.clouds.all < 50) {
      return ("Light");
    } else if(data.clouds.all <= 20) {
      return ("clear sky");
    }
  }

  //save current time (only hours) to set correct day/night icon
  var today = new Date();
  var time = today.getHours();


  //NOTE: ICONS ARE STILL BEING DESIGNED AND WILL BE IMPLEMENTED IN FUTURE UPDATES.
  //find and set correct weather icon
  //icons are stored in assets/icons/
  //thunderstorm: 200 - 299
  //rain: 300 - 599
  //snow: 600 - 699
  //clouds: 700 - 799, 801 - 804
  //clear: 800
  const setIcon = (event) => {
    if(data.weather.id >= 200 && data.weather.id <= 299) {
      return("<img src='/assets/icons/thunderstorm.png' width='100px' height='auto'/>");
    }
    if(data.weather.id >= 300 && data.weather.id <= 599) {
      return("<img src='/assets/icons/rain.png' width='100px' height='auto'/>");
    }
    if(data.weather.id >= 600 && data.weather.id <= 699) {
      return("<img src='/assets/icons/snow.png' width='100px' height='auto'/>");
    }
    if((data.weather.id >= 700 && data.weather.id <= 799) ||(data.weather.id >= 801 && data.weather.id <= 804) ) {
      return("<img src='./assets/icons/cloud.png' width='100px' height='auto'/>");
    }
    //night
    /*if((time >= 20 && time < 24) || (time > 0 && time < 7)) {
      return(<img src="/assets/icons/moon.png" width="100px" height="auto"/>);
    }*/
  }


  const urlZG = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c';
  const urlLND = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const urlPRS = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const urlNY = `https://api.openweathermap.org/data/2.5/weather?q=Washington&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const urlTKY = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const urlBLN = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=895284fb2d2c50a520ea537456963d9c`


  return (
    <div className="App">
      <div className="header">
        <div className="header-wrapper">
          <div className="logo">
            Weather app
          </div>
          <div className="navbar">
            <a href="index.html" className="navbar-a">Home</a>
            <a href="#weather" className="navbar-a">Weather</a>
            <a href="#footer" className="navbar-a">About</a>
          </div>
          <div className="sign-in">
            <a href="#"><button className="glow-on-hover" type="button">Sign In!</button></a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-wrapper">
          <div className="main-title">
            <h1>Weather is <p>retarded</p>.<br />But we are here to help!</h1><br/>
            <h4>With our weather forecast app, you don't have to worry about weather ever again.</h4><br/>
            <a href="#weather"><button className="glow-on-hover" id="check-weather" type="button">Check the weather!</button></a>
          </div>
        </div>
      </div>

      <div className="weather" id="weather">
        <div className="weather-wrapper">
          <div className='search-bar'>
            <input className='search' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Search your location!' type='text'></input>
            <div className='searched-location'>
              <div className="searched-data">
                <div className='top'>
                  <div className='location'>
                    <p>{data.name}</p>
                  </div>
                </div>
                <div className='middle'>
                  <div className='temp'>
                    {data.main ? <p>Current temperature: {Math.round(data.main.temp)}°C</p> : null}
                    
                  </div>
                  <div className='temp_min'>
                    {data.main ? <p>Min temperature: {Math.round(data.main.temp_min)}°C</p> : null}
                  </div>
                  <div className='temp_max'>
                    {data.main ? <p>Max temperature: {Math.round(data.main.temp_max)}°C</p> : null}
                  </div>
                  <div className='wind'>
                    {/* implement wind direction; "deg" response, N, NW... */}
                    {data.main ? <p>Wind: {data.wind.speed} m/s</p> : null}
                  </div>
                  <div className='cloud'>
                    {data.main ? <p>Clound cover: {checkClouds()}</p> : null}
                  </div>
                </div>
              </div>
              <div className='searched-icon'>
                {/* icons are still being designed */}
                {/* <img src="" id="weather-icon" width="200px" height="200px" /> */}
              </div>
            </div>
            
          </div>

          <div className="weather-item">
            
            <input className='search' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Search your location!' type='text'></input>
          </div>
        
          
          <div className="weather-item">
          
          </div>
          <div className="weather-item">
            
          </div>
          <div className="weather-item">

          </div>
          <div className="weather-item">
            
          </div>
          <div className="weather-item">
            
          </div>
        </div>
      </div>

      <div className="footer" id="footer">
        <div className="footer-wrapper">
          <div className="footer-text">
            <p>This project was developed with <a className="navbar-a" id="ft-a" href="https://reactjs.org/" target="_blank">#ReactJS</a> framework, following the tutorial from <br /><a href="" className="navbar-a" id="ft-a" target="_blank">#Tyler Potts</a> on YouTube. The code is open-source, and is available on <a href="https://github.com/josippr" id="ft-a" className="navbar-a" target="_blank">#GitHub.</a></p>
            <br/><p>Copyright &copy;Josip Prpić 2022 | All rights reserved.</p>
          </div>
          </div>
      </div>
      
    </div>
  );
}





























































export default App;