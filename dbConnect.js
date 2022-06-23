require('dotenv').config();
const mongoose = require('mongoose')
// const URL = 'mongodb+srv://username:password@cluster0.fl5q26q.mongodb.net/?retryWrites=true&w=majority'
const URL = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.fl5q26q.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

