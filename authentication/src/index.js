import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./config/dbConnect.js";
import authR from "./routes/authRoutes.js"
import productR from "./routes/productRoutes.js"
import userR from "./routes/userRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


connectToDb();
//routes
// app.get('/', async (req, res) => {res.send("Hello world")});
app.use("/api/auth", authR);
app.use("/api/product", productR) 
app.use("/api/users",userR)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})