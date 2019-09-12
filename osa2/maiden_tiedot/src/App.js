import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setNewSearch ] = useState('')

  // Get data from server with Axios
  // The Effect Hook lets you perform side effects in function components. 
  // Data fetching, setting up a subscription, and manually changing the DOM 
  // in React components are all examples of side effects.
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  // Handle input fields change event and state
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div className="App">
      <Filter search={search} 
              handleSearchChange={handleSearchChange} 
      /><br />
      <Countries countries={countries} 
                 search={search}
      />
    </div>
  )
}

export default App;
