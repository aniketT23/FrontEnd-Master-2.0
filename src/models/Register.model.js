const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, minlength: 6, required: true },
  cnfrmpassword: { type: String, minlength: 6, required: true },
});

module.exports = mongoose.model("users", UserSchema);
