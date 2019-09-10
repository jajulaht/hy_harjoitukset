import React, { useState } from 'react'

const Person = ({ name }) => {
  return (
    <span>{name}</span>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState(
    'Add a new name...'
  )

  // Handle input fields change event and state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
        name: newName
      }
      setPersons(persons.concat(nameObject))
      setNewName('Add a new name...')
    }
  }

  // Map persons array data to rows
  const rows = () => persons.map(person =>
    <React.Fragment key={person.name}>
    <Person
      name={person.name}
    /><br />
    </React.Fragment>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} 
                       onChange={handleNameChange}
          />
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