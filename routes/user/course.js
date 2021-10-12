const express = require("express");
const { authUserMiddleware } = require("../../middleware/auth");
const router = express.Router();
const courseController = require("../../src/controller/user/course.controller");

router.get("/", authUserMiddleware, courseController.courseList);
router.get("/:slug", authUserMiddleware, courseController.courseDetail);

module.exports = router;
