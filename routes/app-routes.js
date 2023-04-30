const express=require('express')
const router=express.Router()

router.get('/', (req, res)=>{
    req.app.locals.layout='main'
    res.render('index')
})

router.get('/sign-in', (req, res)=>{
    req.app.locals.layout='main'
    res.render('login')
})



// router.get('/sign-in', (req, res) => {
//     req.app.locals.layout = 'main'
//     res.render('login')
// })



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


 

module.exports=router