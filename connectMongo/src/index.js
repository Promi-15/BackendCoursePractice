import express from "express";
import productRoutes from "./routes/productRoutes.js"
import {connectToDb } from "./config/dbConnect.js"
import dotenv from "dotenv"
// import { connectToDb } from "./config/dbConnect";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());

connectToDb();
 app.use('/api/products' ,productRoutes)


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
