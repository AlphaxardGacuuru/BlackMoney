<template>
	<nav class="sticky top-0 z-50 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<a
						href="/"
						class="text-xl font-bold text-gray-900">
						<Img style="width: 3em; height: 3em" />
					</a>
				</div>
				<div class="flex space-x-4">
					<a
						href="/"
						class="text-gray-700 hover:text-gray-900">
						Home
					</a>
					<a
						href="/about"
						class="text-gray-700 hover:text-gray-900">
						About
					</a>
					<a
						href="/contact"
						class="text-gray-700 hover:text-gray-900">
						Contact
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import Img from "@/components/core/Img"
	export default {
		components: { Img },
	}
</script>

<style></style>
