const express = require("express");
const router = express.Router();

const categoryController = require("../src/controller/user/category.controller");

/* GET category list. */
router.get("/", categoryController.categoryList);

module.exports = router;
