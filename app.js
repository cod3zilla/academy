const express=require('express')
const ejs=require('ejs')
const path=require('path')
const nodemailer=require('nodemailer')

const app=express()
port=process.env.PORT ||5000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public/', express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));



app.get('/',(req, res)=>{
    res.render('home')
})
app.post('/send',(req, res)=>{
  
  const {fullName,email,phone,message}=req.body 
  const output=`
  <p>you have new contact request</p>
  <h3>contact details</h3>
  <ul>
  <li>Name:${fullName}</li>
  <li>Email:${email}</li>
  <li>Phone:${phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
  ` ;
  let transporter=nodemailer.createTransport({
    host:'mail.codestarcambodia.tech',
    port:26,
    secure:false,
    auth:{
      user:'contact@codestarcambodia.tech',
      pass:'subzh3ll'
    },
    tls:{
      rejectUnauthorized:false
    }
  })
  let mailOptions={
    from:'"CodeStar Contact" <contact@codestarcambodia.tech>',
    to:'paranoid.grunge@gmail.com',
    subject:'CodeStar Contact Request',
    text:'howdy',
    html:output

  }
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      return console.log(err)
    }
    console.log('message sent %s',info.messageId)
    console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
    res.render('home',{alert:'we will get back to you ASAP!'})
  })  
  }) 

  app.get('/contact',(req, res)=>{
    res.render('contact')
  
  })
  app.post('/email',(req, res)=>{
    
    const {fullName,email,phone,message}=req.body 
    const output=`
    <p>you have new contact request</p>
    <h3>contact details</h3>
    <ul>
    <li>Name:${fullName}</li>
    <li>Email:${email}</li>
    <li>Phone:${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    ` ;
    let transporter=nodemailer.createTransport({
      host:'mail.codestarcambodia.tech',
      port:26,
      secure:false,
      auth:{
        user:'contact@codestarcambodia.tech',
        pass:'subzh3ll'
      },
      tls:{
        rejectUnauthorized:false
      }
    })
    let mailOptions={
      from:'"CodeStar Contact" <contact@codestarcambodia.tech>',
      to:'paranoid.grunge@gmail.com',
      subject:'CodeStar Contact Request',
      text:'howdy',
      html:output
  
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        return console.log(err)
      }
      console.log('message sent %s',info.messageId)
      console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
      
      res.render('contact')
    })  
    }) 


app.get('/syllabus',(req, res)=>{
  res.render('syllabus')
})

app.get('/courses',(req, res)=>{
  res.render('courses')
})
app.get('/about',(req, res)=>{
  res.render('about')
})


app.get('/register',(req, res)=>{
  res.render('register')

})

app.post('/register',(req, res)=>{
  console.log(req.body)
  const {firstName,lastName,age,sex,city,province,email,phone,connection}=req.body 
  const output=`
  <p>you have new contact request</p>
  <h3>contact details</h3>
  <ul>
  <li>First Name:${firstName}</li>
  <li>Last Name:${lastName}</li>
  <li>Age:${age}</li>
  <li>Sex:${sex}</li>
  <li>City:${city}</li>
  <li>Province:${province}</li>
  <li>Email:${email}</li>
  <li>Phone:${phone}</li>
  <li>Connection:${connection}</li>
  </ul>
    
  ` ;
  let transporter=nodemailer.createTransport({
    host:'mail.codestarcambodia.tech',
    port:26,
    secure:false,
    auth:{
      user:'contact@codestarcambodia.tech',
      pass:'subzh3ll'
    },
    tls:{
      rejectUnauthorized:false
    }
  })
  let mailOptions={
    from:'"CodeStar Contact" <contact@codestarcambodia.tech>',
    to:'paranoid.grunge@gmail.com',
    subject:'CodeStar Contact Request',
    text:'howdy',
    html:output

  }
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      return console.log(err)
    }
    console.log('message sent %s',info.messageId)
    console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
    res.render('home')
  })  
  }) 

app.listen(port,console.log(`server is available on:${port}`))