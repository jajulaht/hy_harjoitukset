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

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Export is in a shorter form (getAll: getAll)
export default { getAll, create, update }