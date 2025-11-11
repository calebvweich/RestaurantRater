import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  name: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

reviewSchema.index({ userId: 1, restId: 1 }, { unique: true }); // 1 review per user per restaurant
reviewSchema.pre("save", function (next) {
  if (this.isModified("text")) {
    this.updatedAt = new Date();
  }
  next();
});

export default mongoose.model("Review", reviewSchema);