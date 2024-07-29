<template>
	<button
		class="mysonar-btn white-btn"
		@click="$emit('btnClick')"
		:disabled="loading">
		<component
			v-if="icon"
			:is="icon" />
		<span
			v-if="text"
			class="mx-1"
			style="color: inherit">
			{{ text }}
		</span>
		<div v-if="loading"></div>
	</button>
</template>

<script>
	export default {
		name: "Btn",
		props: {
			text: String,
			icon: [Object, Function],
			loading: {
				Boolean,
				default: false,
			},
		},
	}
</script>
