<template>
	<LogoSVG />
</template>

<script>
	import LogoSVG from "@/assets/svgs/LogoSVG"

	export default {
		components: {
			LogoSVG,
		},
	}
</script>

<style>
	.NuxtLogo {
		animation: 1s appear;
		margin: auto;
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
