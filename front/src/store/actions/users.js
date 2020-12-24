import axios from 'axios'

export const users = async ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    axios.get('/users', { params })
      .then(response => {
        commit('users', response.data)
        commit('incrementCurrentPage')
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const createUser = async ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    axios.post('/users', params)
      .then(response => {
        commit('user', response.data)
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*eslint no-unused-vars: ["error", {"args": "none"}]*/
export const getUser = async ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    axios.get(`/users/${id}`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
