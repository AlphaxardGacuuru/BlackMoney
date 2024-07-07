<template>
	<div>
		<Topnav />
		<nuxt />
		<Bottomnav />
	</div>
</template>

<script>
	import Topnav from "@/layouts/Topnav.vue"
	import Bottomnav from "@/layouts/Bottomnav.vue"

	export default {
		components: {
			Topnav,
			Bottomnav,
		},
	}
</script>

<style>
	html,
	body {
		height: 100%;
		font-family: "Roboto", sans-serif;
		/* font-family: 'Raleway', sans-serif; */
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
		max-width: 100%;
		background-color: #efeff6;
		font-weight: 300;
	}
</style>
