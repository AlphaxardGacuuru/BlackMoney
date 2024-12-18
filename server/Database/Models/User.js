const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add a email"],
			unique: [true, "Email Already Exists"],
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("User", UserSchema)
