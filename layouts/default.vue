<template>
	<div>
		<Topnav />
		<nuxt />
		<Bottomnav />
		<LoginPopUp />
		<Messages />
	</div>
</template>

<script>
import Topnav from "@/layouts/Topnav.vue"
import Bottomnav from "@/layouts/Bottomnav.vue"
import LoginPopUp from "@/components/Auth/LoginPopUp"
import Messages from "@/components/Core/Messages"
import { onMounted, useStore } from "@nuxtjs/composition-api";

export default {
	components: {
		Topnav,
		Bottomnav,
		LoginPopUp,
		Messages,
	},
	setup() {
		const store = useStore()

		onMounted(() => {
			store.dispatch("getLocalStorageAuth", "auth")
				.then((res) => {
					store.commit("setAuth", res)
				}).catch((err) => console.error(err))
		})
	}
}
</script>
