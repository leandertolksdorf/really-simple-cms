const mongoose = require("mongoose")

const AssetSchema = new mongoose.Schema({
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
    enum: [
      "image", // png, jpg, jpeg, webp
      "audio", // mp3, m4a, wav, ogg
      "document" // pdf
    ]
  },
  url: {
    type: String,
    required: true
  }
})

const AssetModel = mongoose.model("Asset", AssetSchema)

module.exports = {
  AssetSchema,
  AssetModel
}
