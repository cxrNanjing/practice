import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREAMENT(state) {
    state.count++
  },
  DECREAMENT(state) {
    state.count--
  }
}

const actions = {
  add(context) {
    context.commit("INCREAMENT")
  },
  sub({ commit }) {
    commit("DECREAMENT")
  },
  jshu({ commit, state }) {
    if (state.count % 2 === 1) {
      commit("INCREAMENT")
    }
  },
  jian({ commit, state }, payload) {
    console.log(payload);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("INCREAMENT")
        resolve()
      }, 2000);
    })
  }
}

const getters = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})