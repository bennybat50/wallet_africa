const express=require('express')
const router=express.Router()
const userModel=require('../models/user_md')

//USER MANAGEMENT ROUTES
router.post('/create-user', (req, res)=>{

    userModel.create(req.body).then((user)=>{
        res.send(user)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
    
})




module.exports=router