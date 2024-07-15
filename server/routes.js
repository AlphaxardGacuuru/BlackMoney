const express = require("express")
const router = express.Router()
// const {
// 	registerUser,
// 	loginUser,
// 	getMe,
// } = require("../controllers/userController")
// const { protect } = require("../middleware/authMiddleware")

router.get("/", () => "You hit accounts")

module.exports = router
