const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// User Signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Update Favorite Movies (Fixed)
const updateFavorites = async (req, res) => {
  try {
    const { movieId } = req.body;  
    const userId = req.user.id;  

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Toggle favorite movie
    if (user.favorites.includes(movieId)) {
      user.favorites = user.favorites.filter(id => id !== movieId);
    } else {
      user.favorites.push(movieId);
    }

    await user.save();
    res.json({ message: "Favorites updated", favorites: user.favorites });
  } catch (error) {
    console.error("Favorites Update Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Reset Password
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Password Reset Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signup, login, updateFavorites, resetPassword };
