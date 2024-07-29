/*
 * State
 */
export const state = () => ({
	counter: 0,
	auth: {
		name: "Guest",
		email: "guest@gmail.com",
		avatar: "/storage/avatars/male-avatar.png",
		accountType: "normal",
	},
})

/*
 * Mutations
 */
export const mutations = {
	increment(state) {
		state.counter++
	},
	setUser(state, user) {
		state.user = user
	},
}

/*
 * Actions
 */
export const actions = {
	increment({ commit }) {
		commit("increment")
	},
	setUser({ commit }, user) {
		commit("setUser", user)
	},
}

/*
 * Getters
 */
export const getters = {
	counter: (state) => state.counter,
	user: (state) => state.user,
	auth: (state) => state.auth,
}
