import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false
  },
  getters: {
    getAuth(state){
      return state.auth
    }
  },
  mutations: {
    setAuth(state,value){
      state.auth =value
    }
  },
  actions: {
    changeAuth({ commit },value){
      commit('setAuth', value)
    }
  },
  plugins: [createPersistedState()],
})
