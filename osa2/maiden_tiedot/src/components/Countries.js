import React from 'react'
import Country from './Country'

const Countries = ({ countries, search, showOne, handleShowOne }) => {
  let countriesToShow = []
  let rows
  // Filter for search, no string --> no results
  if (search.length === 0) {
    return null
  }
  else {
  countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase()))
  }

  // Map persons array data to rows
  // 1 hit --> more info
  // 2-10 hits --> name
  // 10+ --> Too many
  if (countriesToShow.length > 10) {
    rows = () => {return ('Too many matches, specify another filter...')} 
  }
  else if (countriesToShow.length > 1 && countriesToShow.length < 11) {
    rows = () => countriesToShow.map(country =>
      <React.Fragment key={country.alpha2Code}>
      <p> 
        {country.name}
      </p>
      </React.Fragment>
    )
  }
  else {
    rows = () => countriesToShow.map(country =>
      <React.Fragment key={country.alpha2Code}>
      <Country
        name={country.name}
        capital={country.capital}
        population={country.population}
        languages={country.languages}
        flag={country.flag}
      />
      </React.Fragment>
    )
  }
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Countries