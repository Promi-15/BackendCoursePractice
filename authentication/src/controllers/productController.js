import { Product } from "../models/productModel.js";

export const addProduct = async (req, res) => {
   try {
    const { name, price } = req.body;
    const product = new Product({
        name,
        price,
        user : req.user.id
 
    })
    await product.save();

    res.status(201).json({message : "Product added successfully"})
   } catch (error) {
       console.log(error)
       res.status(500).json({ message: "internal server error" });
   }
}