const express = require("express");
const router = express.Router();
const user = require("./users");
const course = require("./course");
const category = require("./category");
const loginController = require("../src/controller/auth/login.controller");
const registerController = require("../src/controller/auth/register.controller");
const authValidation = require("../src/validation/auth/auth.validation");

router.post("/login", authValidation, loginController);
router.post("/register", authValidation, registerController);

router.get("/", function (req, res, next) {
	console.log("Ready");
	return res.status(200).json({ message: "Ready" });
});

router.use("/user", user);
router.use("/course", course);
router.use("/category", category);

module.exports = router;
