import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../Models/auth.model.js";

dotenv.config();
export const protectedRoute = async(req,res,next) => {
    try {
        //took token from cookie
        const token = req.cookies.jwt;

        //if(!token)
        if(!token){
          return  res.status(401).json({
                message:"Unauthorized - No token provided"
            })
        }

        //decode verify()
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
           return res.status(401).json({
                message:"Unauthorized - No decoded mssg provided"
            })
        }
        //find user
        const user = await User.findById(decoded.userId).select("-password");

        //if(!user)
        if(!user){
            return res.status(400).json({
                message:"user not found"
            })
        }

        //req.user = user
        req.user = user

        next();
        
    } 
    catch (error) {
        console.log("Error in protected route: ",error.message);
        return res.status(500).json({
             message:"Internal Server error"
         })
    }
}