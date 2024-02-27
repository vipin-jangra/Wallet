const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
    },
    phone : {
        type:String,
        required:true,
    },
    password :{
        type:String,
        required:true,
    },
    balance:{
        type:Number,
        default:0,
    },
    isVerified : {
        type : Boolean,
        default : false,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
},
{
    timestamps :true
}
)

module.exports = mongoose.model("users",userSchema)