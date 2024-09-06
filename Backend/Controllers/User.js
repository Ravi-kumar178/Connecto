const User = require("../Model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
exports.signUp = async(req,res) => {
    try {
        const {userName,email , password, confirmPassword, gender } = req.body;
        
        //every data is required
        if(!userName ||!email ||!password ||!confirmPassword ||!gender){
          return  res.status(400).json({
                success: false,
                message:"All fields are required"
            })
        }
        //check if user already existed
        const alreadyExisting =await User.findOne({email});
        if(alreadyExisting){
            return res.status(401).json({
                success: false,
                message: "User already exists"
            })
        }
        //check if password matches confimPassword or not
        if(password !== confirmPassword){
            return  res.status(401).json({
                success: false,
                message: "Password do not match"
            })
        }
        //hash password and create user by creating profile pic
        let hashedPassword = await bcrypt.hash(password, 10);

        const profilePic = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${userName}`

        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
            gender,
            profilePic
        })
        //send jwt and cookie parser in response
        const payload = {
            id:newUser._id
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET);

        return  res.cookie("access_token",token,{httpOnly:true}).status(200).json({
            success: true,
            _id:newUser._id,
            userName:newUser.userName,
            email:newUser.email,
            profilePic:newUser.profilePic
        })

    } catch (error) {
        console.log(error);
        return  res.status(500).json({
            success: false,
            message:"Internal Server error"
        })
    }
}


exports.logIn = (req,res) => {}
exports.logOut = (req,res) => {} 