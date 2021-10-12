const express = require("express");
const { authAdminMiddleware } = require("../../middleware/auth");
const router = express.Router();
const UserController = require("../../src/controller/admin/user.controller");

router.get("/", authAdminMiddleware, UserController.userList);
router.put("/destroy/:userId", authAdminMiddleware, UserController.userDestroy);

module.exports = router;
