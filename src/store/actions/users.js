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
