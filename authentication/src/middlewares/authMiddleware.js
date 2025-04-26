import jwt from "jsonwebtoken"


export const verifyToken = (req, res, next) => {
    let token;
let authHeader = req.headers.authorization || req.headers.authorization

if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
}

if (!token) {
    return res.status(401).json({message : "Access denied . no token  provided"})
}

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded;
    next();

} catch (error) {
    console.log("err",error)
    res.status(403).json({message : "invalid token"})
}
}
