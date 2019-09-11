import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState(
    'Add a new name...'
  )
  const [ newNumber, setNewNumber ] = useState(
    'Add a new number...'
  )
  const [ search, setNewSearch ] = useState(
    ''
  )

  // Get data from server with Axios
  // The Effect Hook lets you perform side effects in function components. 
  // Data fetching, setting up a subscription, and manually changing the DOM 
  // in React components are all examples of side effects.
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // Handle input fields change event and state
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

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

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} 
              handleSearchChange={handleSearchChange} 
      />
      <h2>Add a new</h2>
      <PersonForm addName={addName} 
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )

}

export default App