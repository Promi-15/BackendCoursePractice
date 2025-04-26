import { User } from "../models/userModel.js"
export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message : "internal server error" })
    }
}

export const updateUserRole = async (res, req) => {
    const { userId } = req.params;
    const { role } = req.body;

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
            
        }
        user.role = role;
        await user.save()

        res.status(200).json({ message :" role updated successfully",user})
    } catch (error) {
        res.status(500).json({message : "internal server error" })
    }
}