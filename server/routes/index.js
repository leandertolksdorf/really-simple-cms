const express = require("express")
const router = express.Router()

const isInitialized = require("../middleware/isInitialized")

/**
 * Health check
 */
router.get("/health", (req, res) => {
  res.send("OK")
})

router.get("/", (req, res) => {
  return res.send("is")
})

module.exports = router
