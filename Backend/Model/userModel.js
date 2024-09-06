const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 6
    },
    gender:{
        type: String,
        required: true,
        enum: ["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps: true});

module.exports = mongoose.model("User",userSchema);