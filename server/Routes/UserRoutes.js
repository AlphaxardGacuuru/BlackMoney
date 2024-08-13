const express = require("express")
const router = express.Router()
const { protect } = require("../../middleware/AuthMiddleware")

const { store, login, auth } = require("../Controllers/UserController")

router.post("/", store)
router.post("/login", login)
router.get("/auth", protect, auth)

module.exports = router
