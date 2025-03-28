const User = require("../models/user");
const { generateToken } = require("../config/jwt");

// User Registration
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, address, bio } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save user
    const user = new User({ name, email, password, address, bio });
    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: user.toJSON(),
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.json({ message: "Login successful", token, user: user.toJSON() });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// Get User Profile (Protected)
exports.getUserProfile = async (req, res) => {
  try {
    res.json(req.user); // req.user is set by authMiddleware
  } catch (error) {
    res.status(500).json({ message: "Profile retrieval failed", error: error.message });
  }
};

// Update User Profile (Protected)
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, address, bio, profilePictureUrl } = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, address, bio, profilePictureUrl },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Profile update failed", error: error.message });
  }
};
