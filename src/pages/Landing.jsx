import React, { useEffect, useRef } from 'react'
import {  Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Landing = ({setWeatherData}) => {
    const inputRef=useRef('')

    // console.log(inputRef);
    
    useEffect(()=>{
        console.log(getWeather('kakkanad'));
        
    },[])
    
    const getWeather=async (place)=>{
        try {
            if (place) {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
            const res = await fetch(url)
            const data=await res.json()
            console.log(data);
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                cloud: data.clouds.all,
                description: data.weather[0].description
            })
            } else {
                alert('please fill the form !!')
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(inputRef);
    

  return (
    <>
        <div style={{paddingTop:'100px'}} className='container-fluid w-100'>
            <div style={{backgroundColor:'#406b45'}} className='mt-1 p-5 border rounded'>
                <h1 style={{fontFamily:'"Great Vibes", serif'}} className='text-center text-light fs-1'>Welcome to Weatherify</h1>
                <p style={{fontFamily:'"Satisfy", serif'}} className='text-center text-light fs-5'>The Weather Update App provides real-time weather forecasts, live updates, and severe weather alerts, helping you stay prepared wherever you are. With accurate data and customizable notifications, it ensures you're always informed about the conditions around you.</p>
                <div style={{width:'100%',height:'350px'}} className='d-flex align-items-center'>
                    {/* <Form> */}
                        <Form.Control ref={inputRef}  className='form-control me-3' type="text" placeholder="Enter the Place.." autoComplete='off' />
                        <Link to={'/weatherupdation'} className='btn btn-warning' type='submit' onClick={()=>getWeather(inputRef.current.value)}><i className="fa-solid fa-arrow-right"></i></Link>
                    {/* </Form> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing