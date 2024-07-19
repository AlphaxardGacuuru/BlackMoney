const express = require("express")
const router = express.Router()
const { protect } = require("../../middleware/AuthMiddleware")

const {
	store,
	login,
	auth,
} = require("../Controllers/UserController")

/*
* User Routes */
router.post("/", store)
router.post("/login", login)
router.get("/me", protect, auth)

module.exports = router
