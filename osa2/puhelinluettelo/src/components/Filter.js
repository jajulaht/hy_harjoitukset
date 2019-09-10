import React from 'react'

const Filter = ({ search, handleSearchChange }) => {
  return (
    <p>Filter shown with <span> </span>
      <input value={search} onChange={handleSearchChange} />
    </p>
  )
}

export default Filter