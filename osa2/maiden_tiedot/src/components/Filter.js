import React from 'react'

const Filter = ({ search, handleSearchChange }) => {
  return (
    <p>Find countries <span> </span>
      <input value={search} onChange={handleSearchChange} />
    </p>
  )
}

export default Filter