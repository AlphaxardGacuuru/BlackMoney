<template>
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4 min-h-full">
			<div class="flex justify-between p-2">
				<h1>Accounts</h1>
				<h1>
					<small>KES</small>
					0
				</h1>
			</div>
			<div class="fixed bottom-0 right-0 z-50 mb-20 mr-2">
				<nuxt-link
					id="chatFloatBtn"
					to="/accounts/create"
					class="block text-white p-1">
					<PlusSVG />
				</nuxt-link>
			</div>

			<div>
				<h1>Counter: {{ counter }}</h1>
				<button class="text-white" @click="incrementCounter">Increment</button>
				<div v-if="user">
					<p class="text-white">Logged in as: {{ user.name }}</p>
				</div>
				<button class="text-white" @click="loginUser">Login</button>
			</div>
		</div>
		<div class="col-sm-4"></div>
	</div>
</template>

<script>
	import PlusSVG from "@/assets/svgs/PlusSVG"

	export default {
		head() {
			return {
				title: "Black Money",
			}
		},
		components: { PlusSVG },
		computed: {
			counter() {
				return this.$store.getters.counter
			},
			user() {
				return this.$store.getters.user
			},
		},
		methods: {
			incrementCounter() {
				this.$store.dispatch("increment")
			},
			loginUser() {
				const user = { name: "John Doe" }
				this.$store.dispatch("setUser", user)
			},
		},
	}
</script>
