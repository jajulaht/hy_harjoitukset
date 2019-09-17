import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Returns all persons in a promise
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteThis = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    return response.status  })
}

// Export is in a shorter form (getAll: getAll)
export default { getAll, create, deleteThis }