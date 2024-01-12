const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LoginModel = mongoose.model("login", LoginSchema);

module.exports = LoginModel;
