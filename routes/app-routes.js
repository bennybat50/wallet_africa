const express=require('express')
const router=express.Router()
const userModel =require('../models/user_md')

router.get('/', (req, res)=>{
    req.app.locals.layout='main'
    res.render('login')
})

router.get('/sign-in', (req, res)=>{
    req.app.locals.layout='main'
    res.render('index')
})

router.get('/create-account', (req, res)=>{
    req.app.locals.layout='main'
    res.render('register')
})

router.get('/dashboard', (req, res)=>{
    req.app.locals.layout='lenny'
    res.render('app/dashboard')
})

router.get('/profile', (req, res)=>{
    req.app.locals.layout='lenny'
    res.render('app/profile')
})

router.get('/balance', (req, res)=>{
    req.app.locals.layout='lenny'
    res.render('app/balances')
})

router.post('/login', (req, res)=>{
    userModel.findOne({phone: req.body.phone, email: req.body.email}).then((user)=>{
        console.log(user)
        if (user){
            res.redirect('/dashboard')
        }else{
            res.redirect.render('/login')
        }
    })
})  
 

module.exports=router