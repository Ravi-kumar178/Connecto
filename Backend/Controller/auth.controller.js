import User from "../Models/auth.model.js"
import bcrypt from "bcrypt"
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const authSignup = async(req,res)=>{
    try {
        //parsing from the req.body
        const{fullName, userName, password, confirmPassword, gender} = req.body;

        //check every data is filled
        if(!fullName || !userName || !password || !confirmPassword || !gender){
           return res.status(401).json({
                success:false,
                message:"Every field is required"
            })
        }

        //check pass
        if(password !== confirmPassword){
           return res.status(401).json({
                success:false,
                message:"Password do not match"
            })
        }


        //check user already exist
        const alreadyExisting = await User.findOne({userName});
        if(alreadyExisting){
        return res.status(401).json({
                success:false,
                message:"User already existing"
            })
        }

        //hash the password and create new user
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password,salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        //create new user
        const newUser = await User.create(
        {  
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender==="male"?boyProfilePic:girlProfilePic
        })
        

        //since we have to enter the dashboard so send the cookie
        generateTokenAndSetCookies(newUser._id,res);

        //return res
       return res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })

    } 
    catch (error) {
       console.log("Error in sign up: ",error.message);
       return res.status(500).json({
            message:"Internal Server error"
        })
    }
}

//login
export const authLogin = async(req,res) => {
    try {
        //parse usename and password
        const {userName, password} = req.body;

        //userExist?
        const userExist = await User.findOne({userName}); 

        //password match with user.password or not
        const isPasswordMatch = await bcrypt.compare(password,userExist?.password||"");
        if(!userExist || !isPasswordMatch){
            return res.status(401).json({
                success: false,
                message:"Invalid username or password"
            })
        }
        //generate token
        generateTokenAndSetCookies(userExist._id,res)

        //return res
      return  res.status(200).json({
            _id:userExist._id,
            fullName:userExist.fullName,
            userName:userExist.userName,
            profilePic:userExist.profilePic
        })
    }
    catch (error) {
        console.log("Error in Log in: ",error.message);
      return   res.status(500).json({
             message:"Internal Server error"
         })
     }
}

//logout
export const authLogout = async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge: 0});

       return res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    } 
    catch (error) {
        console.log("Error in Log out: ",error.message);
       return  res.status(500).json({
             message:"Internal Server error"
         })
    }
}   