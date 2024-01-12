const RegisterModel = require("../Models/RegisterModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const salt = 10;
    // const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    const user = new RegisterModel({
      name,
      email,
      password,
    });
    await user.save();
    res
      .status(201)
      .json({ success: true, user, message: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "Registration failed Internal Server Error!!" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await RegisterModel.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Invalid Credentails!!" });
    }

    const match = bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).json({ message: "Password Doesn't Match" });
    }

    const token = jwt.sign({ userID: user._id }, "SECRET", { expiresIn: "1y" });
    res.status(200).json({
      success: true,
      user,
      token,
      message: "User Login Successfully!!",
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error!!" });
  }
};

module.exports = { registerUser, loginUser };
