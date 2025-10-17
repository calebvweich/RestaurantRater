import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restId: { type: mongoose.Schema.Types.ObjectId, ref: "Rest" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String },
})
export default mongoose.model("Review", reviewSchema);