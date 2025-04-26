import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name : {
        type: String,
         require : true,
    },
    price: {
        type: Number,
        require : true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)
 

