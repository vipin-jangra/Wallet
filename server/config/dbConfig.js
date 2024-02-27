const mongoose =  require('mongoose')
console.log(process.env.mongo_url)
mongoose.connect(process.env.mongo_url)

const connectionResult = mongoose.connection

connectionResult.on('error', ()=>{
    console.log(console,'connection error')
})
connectionResult.on('connected', ()=>{
    console.log(console,'MongoDB connected succesfully')
})

module.exports = connectionResult
