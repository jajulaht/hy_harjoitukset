import React, { useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <span>{name} {number}</span>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState(
    'Add a new name...'
  )
  const [ newNumber, setNewNumber ] = useState(
    'Add a new number...'
  )

  // Handle input fields change event and state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Handle input fields change event and state
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // Adding a name to state array
  const addName = (event) => {
    event.preventDefault()
    if (persons.some( ({ name }) => name === newName )) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName('Add a new name...')
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('Add a new name...')
      setNewNumber('Add a new number...')
    }
  }

  // Map persons array data to rows
  const rows = () => persons.map(person =>
    <React.Fragment key={person.name}>
    <Person
      name={person.name} 
      number={person.number}
    /><br />
    </React.Fragment>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:   <input value={newName} 
                         onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber}
                         onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )

}

export default App