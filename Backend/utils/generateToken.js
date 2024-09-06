import jwt from "jsonwebtoken";
import  dotenv from "dotenv";

dotenv.config();
const generateTokenAndSetCookies = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, //ms
        httpOnly:true, // avoid XSS cross site scripting attack
        sameSite:"strict" // avoid CSRF attack cross site request Forgery attack
    })
}

export default generateTokenAndSetCookies;