const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs"); // ✅ Import bcrypt
const jwt = require("jsonwebtoken");
const User = require("./models/User"); // Import User model
const authenticate = require("./middleware/authenticate"); // Import authentication middleware
const authRoutes = require("./routes/authRoutes"); // ✅ Import authentication routes
const profileRoutes = require("./routes/profileRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/profile", profileRoutes);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// ✅ Mount authentication routes
app.use("/api/auth", authRoutes); // Moves auth logic to a separate file

// ✅ Favorite Movie Route
app.post("/api/favorites", authenticate, async (req, res) => {
    const { movieId } = req.body;
    const userId = req.user.id; // Get user ID from authentication middleware

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        // Toggle favorite logic
        if (user.favorites.includes(movieId)) {
            user.favorites = user.favorites.filter(id => id !== movieId);
        } else {
            user.favorites.push(movieId);
        }

        await user.save();
        res.json({ message: "Favorites updated", favorites: user.favorites });
    } catch (error) {
        console.error("❌ Error updating favorites:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
