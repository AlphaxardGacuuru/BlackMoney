<template>
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4 min-h-full">
			<div class="flex justify-between p-2">
				<h1>Accounts</h1>
				<h1>
					<small>KES</small>
					0
				</h1>
			</div>
			<div class="fixed bottom-0 right-0 z-50 mb-20 mr-2">
				<nuxt-link
					to="/accounts/create"
					class="block text-white p-4 rounded-full shadow-lg"
					style="background-color: #232323">
					<PlusSVG />
				</nuxt-link>
			</div>
		</div>
		<div class="col-sm-4"></div>
	</div>
</template>

<script>
	import PlusSVG from "@/assets/svgs/PlusSVG"

	export default {
		head() {
			return {
				title: "Black Money",
			}
		},
		components: { PlusSVG },
	}
</script>
