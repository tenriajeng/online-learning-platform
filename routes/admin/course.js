const express = require("express");
const { authAdminMiddleware } = require("../../middleware/auth");
const router = express.Router();
const courseController = require("../../src/controller/admin/course.controller");
const courseValidation = require("../../src/validation/admin/course.validation");

router.get("/", authAdminMiddleware, courseController.courseList);
router.post("/", authAdminMiddleware, courseValidation, courseController.courseCreate);
router.put("/:courseId", authAdminMiddleware, courseValidation, courseController.courseUpdate);
router.put("/destroy/:courseId", authAdminMiddleware, courseController.courseDestroy);

module.exports = router;
