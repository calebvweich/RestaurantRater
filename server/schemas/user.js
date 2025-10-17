import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: {type: String, required: true},
  password: { type: String, required: true },
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rest" }]
});

export default mongoose.model("User", userSchema);