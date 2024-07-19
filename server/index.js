const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const consola = require("consola")
const { Nuxt, Builder } = require("nuxt")
const app = express()

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js")
config.dev = process.env.NODE_ENV !== "production"

async function start() {
	// Init Nuxt.js
	const nuxt = new Nuxt(config)

	const { host, port } = nuxt.options.server

	await nuxt.ready()
	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	}

	// Use the API router
	app.use("/api", require('./Routes/Routes'))

	// Give nuxt middleware to express
	app.use(nuxt.render)

	// Listen the server
	app.listen(port, host)
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true,
	})
}
start()
