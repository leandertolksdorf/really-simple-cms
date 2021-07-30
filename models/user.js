const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "editor"]
  }
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = {
  UserSchema,
  UserModel
}
