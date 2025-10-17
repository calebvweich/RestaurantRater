import mongoose from "mongoose"

const restSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ratings: { up: { type: Number }, down: { type: Number } },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  location: { type: String },
})
export default mongoose.model("Rest", restSchema);