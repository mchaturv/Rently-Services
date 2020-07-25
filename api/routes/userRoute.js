const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/add-user", userController.addUser);
router.post("/authenticate", userController.loginUser);

module.exports = router;
