const mongoose = require("mongoose")

const TextSchema = new mongoose.Schema({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ["richText", "plainText"]
  },
  content: {
    type: String
  }
})

const TextModel = mongoose.model("Text", TextSchema)

module.exports = {
  TextSchema,
  TextModel
}
