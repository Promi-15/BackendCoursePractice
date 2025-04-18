import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});
const Product = mongoose.model("Product", productSchema);

mongoose
  .connect(
    "mongodb+srv://promi03133:ADYhO7lD68la2VDP@cluster0.zkbmlxw.mongodb.net/storeDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongoDB connected successfully"))
  .catch((error) => console.log(error));


////create product
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});
//get product
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
   res.status(400).json({ message: error.message });
  }
});

//get a product
app.get("/api/products/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      res.status(404).json("No product found");
    }
    res.json(product);
  } catch (error) {
   res.status(400).json({ message: error.message });
  }
});

//delete
app.delete("/api/products/:productId", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.json("Product deleted successfully");
  } catch (error) {
   res.status(400).json({ message: error.message });
  }
});

//update
app.put("/api/products/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
