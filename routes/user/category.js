const express = require("express");
const router = express.Router();
const categoryController = require("../../src/controller/user/category.controller");

router.get("/", categoryController.categoryList);

module.exports = router;
