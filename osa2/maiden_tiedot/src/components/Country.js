import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({ name, capital, population, languages, flag }) => {
  const [ weather, setWeather ] = useState('')
  const langs = () => languages.map(language => <li key={language.name}>{language.name}</li>) 

  // Get data from server with Axios
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://api.weatherstack.com/current?access_key=0879ab6287c6263cbb3f236e42d6ad59&query=' + capital)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [capital])

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Languages</h3>
      <ul>
        {langs()}
      </ul>
      <img src={flag} alt={'Flag of ' + name}  width='200' />
      <h3>Weather in {capital}</h3>
        <Weather weather={weather} />
    </div>
  )
}

export default Country