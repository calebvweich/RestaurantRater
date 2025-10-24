import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import rest from "./schemas/restaurant.js"
import { auth } from "./auth/auth.js";
import User from "./schemas/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Review from "./schemas/review.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/getRestList", async (req, res) => {
  try {
    const restList = await rest.find();
    return res.status(200).json(restList);
  } catch(err) {
    console.log(err);
    res.status(500);
  }
})

// Register
app.post("/register", async (req, res) => {
  try {
    const { username, name, password } = req.body;

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, name, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.post("/review/new/:restId", auth, async (req, res) => {
  try {
    const { restId } = req.params;
    const { text } = req.body;
    const newReview = new Review({ restaurantId: restId, userId: req.user.id, text: text });
    await newReview.save();

    res.status(200);
  } catch (err) {
    console.log(err);
  }
});

// Get restaurant reviews
app.get("/restaurant/:restId/reviews", async (req, res) => {
  try {
    const { restId } = req.params;
    const restReviews = await Review.find({ restId }).populate("userId", "name");

    res.status(200).json(restReviews);
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
});

// Get user reviews
app.get("/user/:userId/reviews", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const userReviews = await Review.find({ userId }).populate("restaurantId", "name");
    
    res.status(200).json(userReviews);
  } catch (err) {
    console.log(err);
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));