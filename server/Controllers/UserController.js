const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")

const User = require("../Database/Models/User")

/*
 * Register New User
 */
const store = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		res.status(400)

		throw new Error("Please add all fields")
	}

	const userExists = await User.findOne({ email })

	// if (userExists) {
		// res.status(400)

		// throw new Error("User already exists")
	// }

	// Hash Password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	// Create User
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)

		throw new Error("Invalid User data")
	}
})

/*
 * Login User
 */
const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email: email })

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			status: "Success",
			message: "Logged In",
			data: {
				id: user._id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			},
		})
	} else {
		res.status(400)
		throw new Error("Invalid credentials")
	}
})

/*
 * Get User
 */
const auth = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id)

	res.status(200).json({
		status: "Success",
		message: "",
		data: {
			id: _id,
			name: name,
			email: email,
			token: generateToken(_id),
		},
	})
})

/*
 * Generate Token
 */
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	})
}

module.exports = {
	store,
	login,
	auth,
}
