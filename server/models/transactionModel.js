const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    amount:{
        type : Number,
        required: true,

    },
    sender : {
        type : String,
        ref : "users",
        required : true,
    },
    receiver : {
        type : String,
        ref : "users",
        required : true,
    },
    reference :{
        type : String,
        required : true,
    },
    type:{
        type : String ,  
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
},
{timestamps:true})

module.exports = mongoose.model("transactions",transactionSchema)
