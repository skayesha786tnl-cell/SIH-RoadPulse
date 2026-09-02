const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚧 RoadPulse Backend is running!"
    });
});

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected successfully");

        app.listen(5000, () => {
            console.log("🚧 RoadPulse Backend running on http://localhost:5000");
        });
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed:", error.message);
    });