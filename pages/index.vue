<template>
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4">
			<div class="d-flex"></div>
			<div class="fixed bottom-4 right-4">
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
