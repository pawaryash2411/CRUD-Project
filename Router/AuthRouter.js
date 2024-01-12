const Express = require("express");
const { loginUser, registerUser } = require("../Controllers/AuthController");

const router = Express.Router();

// Auth Routes
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
