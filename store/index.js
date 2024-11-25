/*
 * State
 */
export const state = () => ({
	counter: 0,
	auth:
		typeof window !== "undefined" && localStorage.getItem("auth")
			? JSON.parse(localStorage.getItem("auth"))
			: {
					name: "Guest",
					username: "@guest",
					avatar: "/storage/avatars/male-avatar.png",
					accountType: "normal",
			  },
	messages: [],
	errors: [],
	login: false,
})

/*
 * Mutations
 */
export const mutations = {
	increment(state) {
		state.counter++
	},
	setMessages(state, messages) {
		state.messages = messages
	},
	setErrors(state, errors) {
		state.errors = errors
	},
	setUser(state, user) {
		state.user = user
	},
	setLogin(state, boolean) {
		state.login = boolean
	},
	setAuth(state, auth) {
		state.auth = auth
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
	getErrors({ commit }, errors) {
		commit("setErrors", errors)
	},
	getLocalStorageAuth() {
		if (typeof window !== "undefined" && localStorage.getItem("auth")) {
			return JSON.parse(localStorage.getItem("auth"))
		} else {
			return {
				name: "Guest",
				username: "@guest",
				avatar: "/storage/avatars/male-avatar.png",
				accountType: "normal",
				decos: 0,
				posts: 0,
				fans: 0,
			}
		}
	},
	getLocalStorage(state) {
		if (typeof window !== "undefined" && localStorage.getItem(state)) {
			return JSON.parse(localStorage.getItem(state))
		} else {
			return []
		}
	},
	setLocalStorage({ commit }, data) {
		localStorage.setItem(data.key, JSON.stringify(data.value))
	},
}

/*
 * Getters
 */
export const getters = {
	counter: (state) => state.counter,
	user: (state) => state.user,
	auth: (state) => state.auth,
	login: (state) => state.login,
	messages: (state) => state.messages,
	errors: (state) => state.errors,
}
