const express = require("express");
const { authUserMiddleware } = require("../../middleware/auth");
const router = express.Router();
const categoryController = require("../../src/controller/user/category.controller");

router.get("/", authUserMiddleware, categoryController.categoryList);

module.exports = router;
