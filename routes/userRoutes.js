const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Check if API is working
router.get("/", (req, res) => {
  res.json({ message: "Users API is working" });
});

// Public Routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// Protected Routes (Require Authentication)
router.get("/profile", authMiddleware, userController.getUserProfile);
router.put("/profile", authMiddleware, userController.updateUserProfile);

module.exports = router;
