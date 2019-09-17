import React from 'react'

const Person = ({ id, name, number, deletePerson }) => {
  return (
    <>
    <span>{name} {number}</span> <span><button onClick={() => deletePerson(id)}>Delete</button></span>
    </>
  )
}

export default Person