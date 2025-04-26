
import {Product} from "../models/productModel.js"

 export const createProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
}
  

export const getProduct =  async (req, res) => {
  try {
      // user: 
      const products = await Product.find();
      res.json(products);
    } catch (error) {
     res.status(400).json({ message: error.message });
    }
}
  
export const getAProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) {
        res.status(404).json("No product found");
      }
      res.json(product);
    } catch (error) {
     res.status(400).json({ message: error.message });
    }
}
  

export const deleteAProduct =  async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.productId);
      res.json("Product deleted successfully");
    } catch (error) {
     res.status(400).json({ message: error.message });
    }
}
  


export const updateAProduct =  async (req, res) => {
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
  }