const express = require("express");
const router = express.Router();

const loginController = require("../src/controller/auth/login.controller");
const registerController = require("../src/controller/auth/register.controller");
const authValidation = require("../src/validation/auth/auth.validation");

const adminUser = require("./admin/users");
const adminCourse = require("./admin/course");
const adminSummary = require("./admin/summary");

const course = require("./user/course");
const category = require("./user/category");

router.post("/login", authValidation, loginController);
router.post("/register", authValidation, registerController);

router.use("/admin/user", adminUser);
router.use("/admin/course", adminCourse);
router.use("/admin/summary", adminSummary);

router.use("/course", course);
router.use("/category", category);

router.get("/", function (req, res, next) {
	console.log("Ready");
	return res.status(200).json({ message: "Ready" });
});

module.exports = router;
