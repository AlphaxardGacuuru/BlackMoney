<template>
	<nav class="sticky top-0 z-50 bg-white">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="">
					<nuxt-link
						to="/"
						class="text-xl font-bold text-gray-900">
						<Img style="width: 3em; height: 3em" />
					</nuxt-link>
				</div>
				<div class="flex flex-col justify-center">
					<div class="text-xs text-center">All Accounts</div>
					<div class="text-xs text-center">KES 0</div>
				</div>
				<div class="content-center">
					<Btn
						class="text-2xl"
						:icon="plusSVG" />
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
