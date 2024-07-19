<template>
	<div class="relative inline-block text-left">
		<div>
			<span
				class="inline-flex justify-center w-full"
				aria-haspopup="true"
				aria-expanded="true"
				@click="toggleDropdown">
				<img
					:src="imageSrc"
					alt="Profile"
					class="h-10 w-10 rounded-full" />
			</span>
		</div>
		<div
			v-if="isOpen"
			class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu">
			<div
				class="py-1"
				role="none">
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
					role="menuitem">
					Profile
				</a>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
					role="menuitem">
					Settings
				</a>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
					role="menuitem">
					Logout
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isOpen: false,
				imageSrc: "/img/android-chrome-512x512.png", // Replace with your image path
			}
		},
		mounted() {
			// Close dropdown when clicking outside
			document.addEventListener("click", this.handleClickOutside)
		},
		beforeDestroy() {
			document.removeEventListener("click", this.handleClickOutside)
		},
		methods: {
			toggleDropdown() {
				this.isOpen = !this.isOpen
			},
			closeDropdown() {
				this.isOpen = false
			},
			handleClickOutside(event) {
				if (this.$el && !this.$el.contains(event.target)) {
					this.closeDropdown()
				}
			},
		},
	}
</script>

<style scoped>
	/* Add any additional styles here */
</style>
