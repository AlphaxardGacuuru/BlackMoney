// state
export const state = () => ({
	counter: 0,
	user: null,
  })
  
  // mutations
  export const mutations = {
	increment(state) {
	  state.counter++
	},
	setUser(state, user) {
	  state.user = user
	},
  }
  
  // actions
  export const actions = {
	increment({ commit }) {
	  commit('increment')
	},
	setUser({ commit }, user) {
	  commit('setUser', user)
	},
  }
  
  // getters
  export const getters = {
	counter: (state) => state.counter,
	user: (state) => state.user,
  }
  