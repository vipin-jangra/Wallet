const router =  require("express").Router()
const authmiddleware = require("../middleware/authmiddleware")
const User = require("../models/userModel")

//register user account
router.post('/register', async (req,res)=>{
    try{
        //check if user already exist
        let user = await User.findOne({email:req.body.email})
        if(user){
            res.send({
                success: false,
                message: "User already exists",
            })
        }

        const newUser = new User(req.body)
        await newUser.save()
        res.send({
            message:"user created successfully",
            data: null,
            success:true,
        })

    } catch(error){
        res.send({
            message:error.message,
            success:false
        })
    }
})

//login user account
router.post("/login",async (req,res)=> {
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user) {
            return res.send({
                success:false,
                message:'User does not exists',
            })
        }

        const validPassword = req.body.password ===  user.password
        if(!validPassword){
            return res.send({
                success: false,
                message : 'invalid password',
            })
        }else{
            process.env.userId = user._id
            return res.send({
                success: true,
                data:user._id,
                message : 'Login successfully',
            })
        }


    } catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})

//get user info
router.post("/get-user-info", async (req,res) =>{
    try{
        const user = await User.findById(req.body.user_id)

        res.send({
            message: "User info fetched successfully",
            data: user,
            success: true,
        })
    } catch(error){
        res.send({
            message:error.message,
            success: false
        })
    }
})

module.exports = router