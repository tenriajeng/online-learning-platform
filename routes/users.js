const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const UserController = require("../src/controller/admin/user.controller");

router.get("/", authMiddleware, UserController.userList);
router.put("/destroy/:userId", authMiddleware, UserController.userDestroy);

module.exports = router;
