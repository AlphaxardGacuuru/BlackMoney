module.exports = {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{
				rel: "icon",
				type: "image/png",
				href: "/img/android-chrome-512x512.png",
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },
	/*
	 ** Global CSS
	 */
	css: ["~/assets/css/style.css", "~/assets/css/custom.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		"@nuxtjs/tailwindcss",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
		"@nuxtjs/pwa",
		// Doc: https://github.com/nuxt-community/dotenv-module
		"@nuxtjs/dotenv",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/composition-api/module"
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: process.env.BASE_URL, // Base URL for the API
    	browserBaseURL: process.env.BASE_URL, // Base URL for the browser (client-side)
    	credentials: false, // Include credentials in requests
    	proxyHeaders: true, // Proxy headers for SSR
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
	telemetry: false,
}
