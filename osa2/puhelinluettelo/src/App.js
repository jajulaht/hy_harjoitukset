import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'
import Notification from './components/Notification'
import ErrorMsg from './components/ErrorMsg'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState(
    'Add a new name...'
  )
  const [ newNumber, setNewNumber ] = useState(
    'Add a new number...'
  )
  const [ search, setNewSearch ] = useState(
    ''
  )
  const [ message, setMessage ] = useState(null)
  const [ errorMsg, setErrorMsg ] = useState(null)

  // Get data from server with Axios using services/persons.js
  // The Effect Hook lets you perform side effects in function components. 
  // Data fetching, setting up a subscription, and manually changing the DOM 
  // in React components are all examples of side effects.
  useEffect(() => {
    personsService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

  // Adding a name (or changing number) to state array and db with services/persons.js
  const addName = (event) => {
    event.preventDefault()
    if (persons.find( ({ name }) => name === newName )) {
      if (window.confirm(`${newName} is already added to phonebook, 
        replace the old number with a new one?`)) {
          const findPerson = persons.find( ({ name }) => name === newName )
          const changedPerson = { ...findPerson, number: newNumber }
          personsService
            .update(findPerson.id, changedPerson)
            .then(response => {
              console.log('Update', response)
              setPersons(persons.map(person => person.id !== findPerson.id ? person : response))
              setMessage(
                `'${findPerson.name}' has a new number now`
                )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
            .catch(error => {
              setErrorMsg(
                `Information of '${findPerson.name}' has already been removed from server`
                )
              setTimeout(() => {
                console.log('Error: ', error)
                setErrorMsg(null)
              }, 5000)
              setPersons(persons.filter(p => p.id !== findPerson.id))
            })
          setNewName('Add a new name...')
          setNewNumber('Add a new number...')
        } else {
          setNewName('Add a new name...')
          setNewNumber('Add a new number...')
        }
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(nameObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('Add a new name...')
          setNewNumber('Add a new number...')
          setMessage(
            `'${returnedPerson.name}' was added`
            )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  // Deleting the contact details of a person
  const deletePerson = (id, name) => {
    // console.log('Attr', id, name)
    if (window.confirm(`Do you really want to delete ${name}?`)) {
    personsService
      .deleteThis(id)
      .then(returnedData => {
        console.log('Delete statusText', returnedData)
      })
      .catch(error => {
        alert(`the contact id '${id}' was already deleted from server`)
        console.log('error', error)
      })
    let copy = persons.filter(person => person.id !== id)
    setPersons(copy)
    setMessage(
      `'${name}' was removed`
      )
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <ErrorMsg     errorMsg={errorMsg} />
      <Filter       search={search} 
                    handleSearchChange={handleSearchChange} 
      />
      <h2>Add a new</h2>
      <PersonForm   addName={addName} 
                    newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons      persons={persons} 
                    search={search} 
                    deletePerson={deletePerson} 
      />
    </div>
  )

}

export default App