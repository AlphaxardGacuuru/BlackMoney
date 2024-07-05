<template>
	<div>
		<Topnav />
		<nuxt />
	</div>
</template>

<script>
	import Topnav from "@/layouts/Topnav.vue"

	export default {
		components: {
			Topnav,
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
