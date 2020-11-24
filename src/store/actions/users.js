import axios from 'axios'

export const users = async ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('/users')
      .then(response => {
        commit('users', response.data)
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
