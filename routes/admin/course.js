const express = require("express");
const authMiddleware = require("../../middleware/auth");
// const { multerUploads } = require("../../config/multer");
const router = express.Router();
const courseController = require("../../src/controller/admin/course.controller");
const courseValidation = require("../../src/validation/admin/course.validation");

router.get("/", authMiddleware, courseController.courseList);
router.post("/", authMiddleware, courseValidation, courseController.courseCreate);
router.put("/:courseId", authMiddleware, courseValidation, courseController.courseUpdate);
router.put("/destroy/:courseId", authMiddleware, courseController.courseDestroy);

module.exports = router;
