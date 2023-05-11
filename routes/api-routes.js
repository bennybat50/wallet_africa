const express=require('express')
const router=express.Router()
const userModel=require('../models/user_md')
const addOnModel = require('../models/addons_md')

//USER MANAGEMENT ROUTES
router.post('/create-user', (req, res)=>{

    userModel.create(req.body).then((user)=>{
        res.send(user)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
    
})

 router.get('/users', (req, res)=>{
    userModel.find().lean().then((users)=>{
        res.send({success:true, data:users})
    })
 })

 router.get('/user/:id', (req, res)=>{
    userModel.findById(req.params.id).lean().then((user)=>{
        res.send({success:true, data:user})
    })
 })

 router.post('/update-user', (req, res)=>{
    userModel.findByIdAndUpdate(req.body.id,req.body).then(()=>{

    userModel.findById(req.params.id).lean().then((user)=>{
        res.send({success:true,msg:"User Updated", data:user})
    })

})

router.delete('/delete-user/:id', (req, res)=>{
    userModel.findByIdAndDelete(req.params.id).then(()=>{
        res.send({success:true, msg:"User Deleted"})
    })
 })



    
 })

router.get('/users', (req, res)=>{

    userModel.find().lean().then((users)=>{
        res.send({"success":true, "data":users})
    })
})

router.get('/user/:id', (req, res)=>{
    
    userModel.findById(req.params.id).lean().then((users)=>{
        res.send({"success":true, "data":users})
    })
})

// using post method to update the object
router.post('/update-user', (req, res)=>{
    userModel.findByIdAndUpdate(req.body.id, req.body).then(()=>{
        
        userModel.findById(req.body.id).lean().then((user)=>{
            res.send({success:true, message:"User Updated", data:user})
        })
    })
})

// router.put('/update-user/:id', (req, res)=>{
//     userModel.findByIdAndUpdate(req.params.id, req.body).then(()=>{
        
//         userModel.findById(req.params.id).lean().then((user)=>{
//             res.send({success:true, message:"User Updated", data:user})
//         })
//     })
// })

router.delete('/delete-user/:id', (req, res)=>{
    userModel.findByIdAndDelete(req.params.id).then(()=>{
        res.send({success:true, message:"User Deleted"})
    })
})


/* ADDON MANAGEMENT ROUTES*/
//  create addon
router.post("/create-addon", (req, res)=>{

    addOnModel.create(req.body).then((user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

// get all addons
router.get("/addons", (req, res)=>{
    addOnModel.find().lean().then((addons)=>{
        res.send({success: true, data:addons})
    })
})

router.get("/addon/:id",(req,res)=>{
    addOnModel.findById(req.params.id).lean().then((user)=>{
        res.send({success: true, data: user})
    })
    
})

router.post("/update-addon", (req,res)=>{
    addOnModel.findByIdAndUpdate(req.body.id, req.body).then(()=>{
        addOnModel.findById(req.body.id).lean().then((user)=>{
            res.send({success:true, message: "addon Updated", data: user})
        })
    })
})

router.delete("/delete-addon/:id", (req,res)=>{
    addOnModel.findByIdAndDelete(req.params.id).then(()=>{
        res.send({success:true, message: "Addon Deleted"})
    })
})



module.exports=router