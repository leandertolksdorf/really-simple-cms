require("dotenv").config()
const express = require("express")

const routes = require("./routes")
const app = express()
app.use("/", routes)

//Import the mongoose module
var mongoose = require("mongoose")

//Set up default mongoose connection
var mongoDB = "mongodb://really_simple_cms__db/really-simple-cms"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening")
})
