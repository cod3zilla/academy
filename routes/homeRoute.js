const express=require('express')
const nodemailer=require('nodemailer')
const router=express.Router()
const { sendForm, registerForm } = require('../controllers/send.controllers')

router.get('/',(req, res)=>{
    res.render('home')
})

router.post('/',sendForm)

router.get('/contact',(req, res)=>{
    res.render('contact')  
  })
router.post('/contact',sendForm) 


router.get('/syllabus',(req, res)=>{
  res.render('syllabus')
})

router.get('/courses',(req, res)=>{
  res.render('courses')
})
router.get('/about',(req, res)=>{
  res.render('about')
})


router.get('/register',(req, res)=>{
  res.render('register')
})

router.post('/register',registerForm) 

module.exports=router
