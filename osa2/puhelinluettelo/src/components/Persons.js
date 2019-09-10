import React from 'react'
import Person from './Person'

const Persons = ({ persons, search }) => {
  // Filter for search
  const nameToShow = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase()))

  // Map persons array data to rows
  const rows = () => nameToShow.map(person =>
    <React.Fragment key={person.name}>
    <Person 
      name={person.name} 
      number={person.number}
    /><br />
    </React.Fragment>
  )
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Persons