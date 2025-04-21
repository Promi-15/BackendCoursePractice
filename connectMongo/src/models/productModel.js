import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});
export const Product = mongoose.model("Product", productSchema);