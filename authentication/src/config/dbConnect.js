import mongoose from "mongoose";

 export const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Mongo connected successfully')
        })
    .catch((error)=> console.log("Error in Mango conn.....\n", error))
}