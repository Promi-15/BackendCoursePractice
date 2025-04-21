import mongoose from "mongoose";

 export const connectToDb = () => {
  mongoose
    .connect(process.env.Mongo_url)
    .then(() => console.log("mongoDB connected successfully"))
    .catch((error) => console.log(error));
};
