import express from "express"
import { getUsers, updateUserRole } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";
const router = express.Router();

router.get("/", verifyToken, isAdmin, getUsers);
router.put("/userId/role",verifyToken,isAdmin,updateUserRole)

export default router;