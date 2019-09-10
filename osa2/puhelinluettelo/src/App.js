import React, { useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <span>{name} {number}</span>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState(
    'Add a new name...'
  )
  const [ newNumber, setNewNumber ] = useState(
    'Add a new number...'
  )
  const [ search, setNewSearch ] = useState(
    ''
  )

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
      <h1>Phonebook</h1>
      <p>Filter shown with <span> </span>
        <input value={search} onChange={handleSearchChange} />
      </p>
      <h2>Add a new</h2>
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