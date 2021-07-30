require("dotenv").config()

const express = require("express")
const routes = require("./routes")

const EXPRESS_SETTINGS = {}

const app = express()
app.use("/", routes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening")
})
