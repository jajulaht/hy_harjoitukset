import React from 'react'

const Weather = ({weather}) => {
  if (weather.length === 0) {
    return <div>Loading...</div>
  }
  else {
    return (
      <>
        <p><strong>Temperature:</strong> {weather.current.temperature} Celsius</p>
        <p>
          <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />
        </p>
        <p><strong>Wind:</strong> {weather.current.wind_speed} m/s, direction {weather.current.wind_dir}</p>
      </>
    )
  }
}

export default Weather