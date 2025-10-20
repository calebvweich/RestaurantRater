import mongoose from "mongoose"

const restSchema = new mongoose.Schema({
  name: String,
  address: String,
  coords: {
    lat: Number,
    lng: Number
  },
  phone: String,
  website: String,
  image: String,
  gallery: [String],
  description: String,
  categories: [String],
  priceRange: String,   // "£", "££", "£££"
  takeaway: Boolean,
  delivery: Boolean,
  reservations: Boolean,
  openingHours: Object,
  ratings: {
    up: Number,
    down: Number
  },
  reviews: [mongoose.Schema.Types.ObjectId]
});

export default mongoose.model("Rest", restSchema);