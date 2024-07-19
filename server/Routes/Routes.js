const express = require('express')
const router = express.Router()

// Use your routes
router.use("/users", require('./UserRoutes'))
router.use("/accounts", require('./AccountRoutes'))

module.exports = router
