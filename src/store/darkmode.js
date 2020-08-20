export default {
    
  namespaced: true,

  state: {
    mode: false
  },

  mutations: {
    DARK_MODE(state) {
      state.mode = !state.mode
    }
  },

  actions: {
    darkmode({ commit }) {
      commit('DARK_MODE')
    }
  }

}