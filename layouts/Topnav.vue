<template>
	<nav
		class="sticky top-0 z-50"
		style="background-color: #232323">
		<div class="max-w-7xl mx-auto pr-2 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="">
					<Img style="width: 3em; height: 3em" />
				</div>
				<div class="flex flex-col justify-center text-white">
					<div class="text-xs text-center">All Accounts</div>
					<div class="text-xs text-center">KES 0</div>
				</div>
				<div class="text-white mt-1">
					<UserDropdown />
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import Img from "@/components/Core/Img"
	import Btn from "@/components/Core/Btn"
	import UserDropdown from "@/components/core/UserDropdown"

	import PlusSVG from "@/assets/svgs/PlusSVG"
	import PersonSVG from "@/assets/svgs/PersonSVG"

	export default {
		components: { Img, Btn, UserDropdown, PlusSVG, PersonSVG },
		data() {
			return {
				plusSVG: PlusSVG,
			}
		},
	}
</script>
