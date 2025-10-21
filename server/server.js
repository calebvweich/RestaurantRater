import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import rest from "./schemas/restaurant.js"
import { auth } from "./auth/auth.js";

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

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));