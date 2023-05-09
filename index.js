const express=require('express')
const app=express()
const cors=require('cors')
const connect=require('./db')
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')

connect()
app.use(express.json())
app.use(cors())
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)

app.listen(5000,()=>console.log("Server started successfully"))
