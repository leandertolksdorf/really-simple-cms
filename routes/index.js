const express = require("express")
const router = express.Router()

/**
 * Health check
 */
router.use("/", (req, res) => {
  res.send("OK")
})

module.exports = router
