import React from 'react'
import Person from './Person'

const Persons = ({ persons, search, deletePerson }) => {
  if (persons.length == null) {
    return <div>Loading...</div>
  }
  else {
  // Filter for search
  console.log('hello', persons)
  const nameToShow = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase()))

  // Map persons array data to rows
  const rows = () => nameToShow.map(person =>
    <React.Fragment key={person.name}>
    <Person 
      id={person.id}
      name={person.name} 
      number={person.number}
      deletePerson={() => deletePerson(person.id, person.name)}
    /><br />
    </React.Fragment>
  )
  return (
    <div>
      {rows()}
    </div>
  )
}
}

export default Persons