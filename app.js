require('dotenv').config()
const express=require('express')
const ejs=require('ejs')
const path=require('path')
const nodemailer=require('nodemailer')
const homeRouter=require('./routes/homeRoute')

const app=express()
port=process.env.PORT ||5000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public/', express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

//routes

app.use('/',homeRouter);

  

app.listen(port,console.log(`server is available on:${port}`))