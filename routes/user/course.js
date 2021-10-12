const express = require("express");
const router = express.Router();
const courseController = require("../../src/controller/user/course.controller");

router.get("/", courseController.courseList);
router.get("/:slug", courseController.courseDetail);

module.exports = router;
