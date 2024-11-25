<script setup>
import { useStore } from "@nuxtjs/composition-api";
import { ref, watch } from "vue";

		const store = useStore()

		// Watch for changes in errors or messages
				if (newErrors.length > 0 || newMessages.length > 0) {
					setTimeout(() => store.commit("setErrors", []), 4900);
					setTimeout(() => store.commit("setMessages", []), 4900);
				}
</script>

<template>
	<div style="text-align: center">
		<h6 id="snackbar">
			<!-- Message Toast Start -->
			<div v-for="(message, key) in messages"
				 :key="key"
				 class="glass p-2 mt-2 text-light"
				 style="background-color: rgba(143, 234, 133, 1); transition: 0.3s">
				{{ message }}
			</div>
			<!-- Message Toast End -->

			<!-- Error Toast Start -->
			<div v-for="(error, key) in errors"
				 :key="key"
				 class="glass p-2 mt-2 text-light"
				 style="background-color: rgba(235, 96, 96, 1); transition: 0.3s">
				{{ error }}
			</div>
			<!-- Error Toast End -->
		</h6>
	</div>
</template>