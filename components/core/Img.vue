<template>
	<img
		:src="src"
		:width="width"
		:height="height"
		:class="className"
		:style="style"
		:alt="alt"
		loading="lazy" />
</template>

<script>
	export default {
		name: "Img",
		props: {
			src: {
				type: String,
				default: "/img/android-chrome-512x512.png",
			},
			width: {
				type: [String, Number],
				default: null,
			},
			height: {
				type: [String, Number],
				default: null,
			},
			className: {
				type: String,
				default: "",
			},
			style: {
				type: String,
				default: "",
			},
			alt: {
				type: String,
				default: "image",
			},
		},
	}
</script>
