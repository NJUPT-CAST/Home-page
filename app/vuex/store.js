import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  userInfo: {},
  isLog: false
}

const mutations = {
  FENTCHINFO (state, info) {
    state.userInfo = info
  }
}

export default new Vuex.Store({
  state,
  mutations
})
