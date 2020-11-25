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
