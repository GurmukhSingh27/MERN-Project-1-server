// src/routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/is-user-logged-in", authController.isuserLoggedIn);

module.exports = router;