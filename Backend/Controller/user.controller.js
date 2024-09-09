import User from "../Models/auth.model.js";

export const getUserForSidepoints = async(req,res) => {
    try {
        //get user._id
        const userId = req.user._id;

        //find all user i.e ne=user._id
        const filteredUser = await User.find({
            _id:{$ne:userId}
        }).select("-password");

        //return
        return res.status(200).json(filteredUser);
    }
    catch (error) {
        console.log("Error in getting user for sidebars: ",error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}