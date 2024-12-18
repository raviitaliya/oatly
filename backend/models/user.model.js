import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confpassword:{
        type:String,
        required:false
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    primaryMobile:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default: Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpires:Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
},{timestamps:true});

export const User = mongoose.model("User", userSchema);
