import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },

  liked: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  saved: { type: Boolean, default: false },
});

// Prevent duplicate (user + restaurant) entries
interactionSchema.index({ userId: 1, restaurantId: 1 }, { unique: true });

export default mongoose.model("Interaction", interactionSchema);