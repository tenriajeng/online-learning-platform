const express = require("express");
// const { multerUploads } = require("../../config/multer");
const router = express.Router();
const courseController = require("../../src/controller/admin/course.controller");
const courseValidation = require("../../src/validation/admin/course.validation");

router.get("/", courseController.courseList);
router.post("/", courseValidation, courseController.courseCreate);
router.put("/:courseId", courseValidation, courseController.courseUpdate);
router.put("/destroy/:courseId", courseController.courseDestroy);

module.exports = router;
