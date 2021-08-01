const mongoose = require("mongoose")

const SettingsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  value: {
    type: String,
    required: true
  }
})

const SettingsModel = mongoose.model("Text", SettingsSchema)

module.exports = {
  SettingsSchema,
  SettingsModel
}
