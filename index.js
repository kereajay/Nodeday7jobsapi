const express=require('express')
const cors=require('cors')
const mongoose =require('mongoose')
const JObroute=require('./Routes/Job')
const dotenv = require("dotenv");
dotenv.config();

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.DATABASEURI).then(()=>console.log("data base connected successfully")).catch((err)=>console.log(err))
app.use(JObroute)
app.listen(3578,console.log("server is on 3578"))