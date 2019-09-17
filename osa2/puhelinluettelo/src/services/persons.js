import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Returns all persons in a promise
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Adds a new contact
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Deletes contact
const deleteThis = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.statusText)
  .catch(error => {
    console.log('fail')
  })
}

// Updates number
const update = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber)
  return request.then(response => response.data)
}

// Export is in a shorter form (getAll: getAll)
export default { getAll, create, deleteThis, update }