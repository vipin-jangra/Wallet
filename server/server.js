const express = require("express")
const cors = require('cors')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3000

app.use(express.json())

const dbConfig = require("./config/dbConfig")
const usersRoute = require("./routes/usersRoutes")
const transactionsRoute = require("./routes/transactionRoutes")

app.use(cors())
app.use('/api/users',usersRoute)
app.use('/api/transactions',transactionsRoute)
app.listen(3000,() =>{
    console.log(`server started on port : ${PORT}`)
})