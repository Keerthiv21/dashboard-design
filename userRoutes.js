const express = require("express");
const { getUserProfile, googleAuth } = require("../controllers/userController");
const router = express.Router();

router.get("/profile", getUserProfile);
router.post("/auth/google", googleAuth);

module.exports = router;
