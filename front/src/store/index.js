import { usersActions } from './actions'

import { usersGetters } from './getters'

import { usersMutations } from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const usersModule = {
  state: {
    users: [],
    meta: {
      current_page: 1
    }
  },
  actions: usersActions,
  mutations: usersMutations,
  getters: usersGetters,
  namespaced: true
}

export default new Vuex.Store({
  modules: { users: usersModule }
})
