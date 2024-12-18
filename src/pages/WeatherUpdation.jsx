import React, { useState } from 'react'

const WeatherUpdation = ({weatherData}) => {
    console.log(weatherData);
    
    
  return (
    <>
        <div style={{paddingTop:'100px',backgroundImage:'linear-gradient(to bottom,rgba(24, 24, 169, 0.967),rgba(59, 73, 150, 0.868))',height:'100vh'}} className='row'>
            <div className="col-2"></div>
            <div style={{height:'500px',backgroundColor:'rgba(255, 255, 255, 0.2)',width:'500px',textAlign:'justify'}}  className='mt-1 col rounded d-flex flex-column align-items-center p-5'>
                <h1 className='mb-4' style={{fontWeight:'"Prata", serif;'}}><i className="fa-solid fa-location-dot me-3"></i> {weatherData?.location} </h1>
                <h1 className='fs-1' >{weatherData?.temperature} <sup>o</sup>C</h1>
                <h3 className='mb-3'>{weatherData?.description}</h3>
                <h3><i class="fa-solid fa-cloud"></i> Clouds: {weatherData?.cloud} %</h3>
                <h3><i class="fa-solid fa-water"></i> Humidity: {weatherData?.humidity} %</h3>
                <h3><i class="fa-solid fa-wind"></i> Wind Speed: {weatherData?.windSpeed} Km/h</h3>
                
            </div>
            <div className="col-2"></div>
        </div>
    </>
  )
}

export default WeatherUpdation