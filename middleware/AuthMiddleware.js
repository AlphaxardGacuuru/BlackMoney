const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
// const User = require("../server/Database/Models/User")

const protect = asyncHandler(async (req, res, next) => {
	let token

	var hasBearerToken = req.headers.authorization && 
		req.headers.authorization.startsWith("Bearer")

	if (hasBearerToken) {
		try {
			// Get Token from Header
			token = req.headers.authorization.split(" ")[1]

			// Verify Token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			req.user = await User.findById(decoded.id).select("-password")

			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error("Not Authorized")
		}
	}

	if (!token) {
		res.status(401)
		throw new Error("Not Authorized, No token")
	}
})

module.exports = {
	protect,
}
