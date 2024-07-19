<template>
	<div>
		<Topnav />
		<nuxt />
		<Bottomnav />
		<!-- <LoginPopUp /> -->
	</div>
</template>

<script>
	import Topnav from "@/layouts/Topnav.vue"
	import Bottomnav from "@/layouts/Bottomnav.vue"
	// import LoginPopUp from "@/components/Auth/LoginPopUp"

	export default {
		components: {
			Topnav,
			Bottomnav,
			// LoginPopUp,
		},
	}
</script>
