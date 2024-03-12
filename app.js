const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet  = require('helmet')
const hpp = require('hpp')
const rateLimiter = require('express-rate-limit')
const  router  = require('./src/routes/api')

const app = new express()

//open  cors 
app.use(cors())

//security implement
app.use(helmet())
app.use(hpp())
app.use(express.json({limit:'20MB'}))
app.use(express.urlencoded({extended:true}))
const limiter = rateLimiter({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/taskmanager')
  .then(() => console.log('Database Connected!'));


//api route implement
app.use('/api', router)

//404 not found route
app.use('*',(req,res)=>{
    res.status(404).json({status:'fail' , message:'404 not found'})
})

module.exports = app