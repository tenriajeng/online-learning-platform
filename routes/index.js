const express = require("express");
const router = express.Router();

const loginController = require("../src/controller/auth/login.controller");
const registerController = require("../src/controller/auth/register.controller");
const authValidation = require("../src/validation/auth/auth.validation");

const adminUser = require("./admin/users");
const adminCourse = require("./admin/course");

const course = require("./course");
const category = require("./category");

router.post("/login", authValidation, loginController);
router.post("/register", authValidation, registerController);

router.use("/admin/user", adminUser);
router.use("/admin/course", adminCourse);

router.use("/course", course);
router.use("/category", category);

router.get("/", function (req, res, next) {
	console.log("Ready");
	return res.status(200).json({ message: "Ready" });
});

module.exports = router;
