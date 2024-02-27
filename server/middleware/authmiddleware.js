module.exports = function(req, res, next){
    try{
        req.body.userId = process.env.userId
        next()
    } catch(error){
        res.send({
            message:error.message,
            success:false,
        })
    }
}