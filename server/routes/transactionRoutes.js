const router = require('express').Router()
const authmiddleware = require('../middleware/authmiddleware')
const Transaction = require("../models/transactionModel")
const User = require("../models/userModel")

// transfer money from one account to another
router.post("/transfer-fund",async(req, res)=>{
    try{
        const newTransaction = new Transaction(req.body)
        await newTransaction.save()
        //decrease senders balance
        await User.findByIdAndUpdate(req.body.sender,{
            $inc : {balance: -req.body.amount}
        })
        //increase receiver balance
        await User.findByIdAndUpdate(req.body.receiver,{
            $inc : {balance: req.body.amount}
        })

        res.send({
            message:"Transaction Successfull",
            data: newTransaction,
            success : true,
        })
    } catch(error){
            res.send({
                message: "Transaction Failed",
                data: error.message,
                success: false,
            })
    }

})

//verify receiver account number

router.post("/verify-account", async(req, res)=>{
    try{
        const user = await User.findOne({_id:req.body.receiver})
        if(user){
            res.send({
                message: "Account verified",
                data : user,
                success: true,
            })
        }else{
            res.send({
                message: "Account not found",
                data : null,
                success: false,
            })
        }

    }catch(error){
        res.send({
            message: "Account not found",
            data : error.message,
            success: false,
        })
    }
})

//get all transactions of a user
router.post("/get-all-transactions-by-user", async (req,res) =>{
    try{
        const transactions = await Transaction.find({
            $or : [{sender:req.body.user_id},{receiver:req.body.user_id}],
        }).populate("sender").populate("receiver")

        res.send({
            message:"All transactions fetched successfully!",
            data : transactions ,
            success : true,    
        })
    } catch(error){
        res.send({
            message:"transactions not fetched successfully!",
            data : error.message ,
            success : false,    
        })
    }
})

//deposit funds
router.post("/deposit-fund", async (req,res)=>{
    try{
        const newTransaction = new Transaction(req.body)
        await newTransaction.save()
        //increase senders balance
        await User.findByIdAndUpdate(req.body.sender,{
            $inc : {balance: req.body.amount}
        })
        res.send({
            message:"Transaction Successfull",
            data: newTransaction,
            success : true,
        })
    } catch(error){
        res.send({
            message: "Transaction Failed",
            data: error.message,
            success: false,
        })
    }
})

//withdraw funds
router.post("/withdraw-fund", async (req,res)=>{
    try{
        const newTransaction = new Transaction(req.body)
        await newTransaction.save()
        //increase senders balance
        await User.findByIdAndUpdate(req.body.sender,{
            $inc : {balance: -req.body.amount}
        })
        res.send({
            message:"Transaction Successfull",
            data: newTransaction,
            success : true,
        })
    } catch(error){
        res.send({
            message: "Transaction Failed",
            data: error.message,
            success: false,
        })
    }
})

module.exports = router