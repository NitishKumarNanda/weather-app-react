import React from 'react'

export default function Result({weatherData}) {
  return (
    <div>
        {
            weatherData.length !==0?
            <>
            <h2 style={{textAlign:'center'}}>{weatherData.name}</h2>
        <div className='flex justify-around my-2'>
            <div>Max Temp : {weatherData.main.temp_max}</div>
            <div>Min Temp : {weatherData.main.temp_min}</div>
        </div>
        <div className='flex justify-around my-2'>
            <div><img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='icon'/></div>
            <div>Weather Type : {weatherData.weather[0].main}</div>
        </div>
            </>
            :
            <>
                <h2 style={{textAlign:'center'}}>Please enter City Name</h2>
            </>
        }
    </div>
  )
}
