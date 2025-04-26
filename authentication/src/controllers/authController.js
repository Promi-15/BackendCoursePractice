import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        await newUser.save();
        res.status(201).json({message:"user create successfully"})
    } catch (error) {
        res.status(500).json({message : "something went wrong"})
    }
}

export const login = async (req, res) => {
    try {
      ///ckheck kortese j database e ase nki oi email ta
      const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({message : "user not found"} )
        }
        const isMatch =   bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({message : "Invalid Credentials"})
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }

        );
        
  res.status(200).json({token})

    } catch (error) {
        console.log("login error" ,error)
    res.status(500).json({message : "something went wrong"})
  }
}


// const prodcuts = await Prodcct.find()