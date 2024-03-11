import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    role:{
     type:Number,
     default:0
    }
}, {timestamps:true})


const userModel = mongoose.model('contact', userSchema);

export default userModel