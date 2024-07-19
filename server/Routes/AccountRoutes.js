const express = require("express")
const router = express.Router()
// const { protect } = require("../../middleware/AuthMiddleware")

const {
	index,
	// show,
	// store,
	// update,
	// destory,
} = require("../Controllers/AccountController")

/*
* Account Routes */
router.route("/").get(index)
// router.route("/:id").get(protect, show)
// router.route("/").post(protect, store)
// router.route("/:id").put(protect, update)
// router.route("/:id").delete(protect, destory)

module.exports = router
