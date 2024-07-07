<template>
	<nav
		class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
		<ul class="flex justify-around">
			<li class="flex-1 text-center py-2">
				<nuxt-link to="#">
					<div
						class="flex flex-col justify-center items-center mx-auto w-full text-gray-700 hover:text-blue-500">
						<span class="text-2xl p-1"><WalletSVG /></span>
						<span class="text-sm">Accounts</span>
					</div>
				</nuxt-link>
			</li>
			<li class="flex-1 text-center py-2">
				<nuxt-link to="#">
					<div
						class="flex flex-col justify-center items-center mx-auto w-full text-gray-700 hover:text-blue-500">
						<span class="text-2xl p-1"><CategorySVG /></span>
						<span class="text-sm">Categories</span>
					</div>
				</nuxt-link>
			</li>
			<li class="flex-1 text-center py-2">
				<nuxt-link to="#">
					<div
						class="flex flex-col justify-center items-center mx-auto w-full text-gray-700 hover:text-blue-500">
						<span class="text-2xl p-1"><TransactionSVG /></span>
						<span class="text-sm">Transactions</span>
					</div>
				</nuxt-link>
			</li>
			<li class="flex-1 text-center py-2">
				<nuxt-link to="#">
					<div
						class="flex flex-col justify-center items-center mx-auto w-full text-gray-700 hover:text-blue-500">
						<span class="text-2xl p-1"><OverviewSVG /></span>
						<span class="text-sm">Overview</span>
					</div>
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import WalletSVG from "@/assets/svgs/WalletSVG"
	import CategorySVG from "@/assets/svgs/CategorySVG"
	import TransactionSVG from "@/assets/svgs/TransactionSVG"
	import OverviewSVG from "@/assets/svgs/OverviewSVG"

	export default {
		components: { WalletSVG, CategorySVG, TransactionSVG, OverviewSVG },
	}
</script>
