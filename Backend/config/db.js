const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("📡 Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "your-database-name", 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process 
  }
};

module.exports = connectDB;
