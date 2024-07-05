<template>
	<nav class="sticky top-0 z-50 bg-white">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<nuxt-link
						to="/"
						class="text-xl font-bold text-gray-900">
						<Img style="width: 3em; height: 3em" />
					</nuxt-link>
				</div>
				<div class="flex space-x-4">
					<Btn
						class="text-1xl"
						:icon="plusSVG" />
					<PlusSVG />
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import Img from "@/components/core/Img"
	import Btn from "@/components/core/Btn"
	import PlusSVG from "@/assets/svgs/PlusSVG"

	export default {
		components: { Img, Btn, PlusSVG },
		data() {
			return {
				plusSVG: PlusSVG,
			}
		},
	}
</script>

<style></style>
