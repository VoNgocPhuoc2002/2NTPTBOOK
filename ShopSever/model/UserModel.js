const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, require: true },
    dateofbirth: { type: String, required: true, default: 0 },
    country: { type: String, require: true },
    mobile: { type: String, required: true, default: 0 },
    gender: { type: String, require: true },
    resetPassword: { type: String, required: false, default: null },
    isFirstLogin: { type: Boolean, default: true }, // Thêm trường isFirstLogin
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);


