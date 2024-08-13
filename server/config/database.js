const mongoose = require("mongoose")

const connectDB = () => {
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((res) => {
			console.log(`MongoDB connected: ${res.connection.host}`.cyan.underline)
		})
		.catch((err) => {
			console.log(err)

			process.exit(1)
		})
}

module.exports = connectDB
