<template>
	<button
		class="border border-black uppercase text-sm bg-transparent py-2 px-4 hover:bg-black hover:text-white"
		@click="onClick()"
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
		methods: {
			onClick() {
				this.$emit("btn-click")
			},
		},
	}
</script>
