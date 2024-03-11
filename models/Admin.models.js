import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:1
    }
})


const adminModel = mongoose.model('admin', adminSchema)

export  default adminModel