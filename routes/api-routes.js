
const express = require('express')
const router = express.Router()
const userModel = require('../models/user_md')


//USER MANAGEMENT ROUTES
router.post('/create-user', (req, res) => {

    userModel.create(req.body).then((user) => {
        res.send({ sucess: true, data: user });

    }).catch((err) => {
        console.log(err);
        res.send({ "error": true, message: err.message });
    })

})


router.get('/users', (req, res) => {
    userModel.find().lean().then((users) => {
        res.send({ success: true, data: users });
    })
})

router.get('/user/:id', (req, res) => {
    userModel.findById(req.params.id).lean().then((user) => {
        res.send({ success: true, data: user });
    })
})



router.put('/user/:id', (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body).then(() => {

        userModel.findById(req.params.id).lean().then((user) => {
            res.send({ success: true, msg: "user Updates", data: user });
        })

    })
})

router.get('/users', (req, res) => {
    userModel.find().lean().then((users) => {
        res.send({ success: true, data: users })
    })
})

router.get('/user/:id', (req, res) => {
    userModel.findById(req.params.id).lean().then((user) => {
        res.send({ success: true, data: user })
    })
})

router.post('/update-user', (req, res) => {
    userModel.findByIdAndUpdate(req.body.id, req.body).then(() => {

        userModel.findById(req.params.id).lean().then((user) => {
            res.send({ success: true, msg: "User Updated", data: user })
        })

    })

    router.delete('/delete-user/:id', (req, res) => {
        userModel.findByIdAndDelete(req.params.id).then(() => {
            res.send({ success: true, msg: "User Deleted" })
        })
    })




})

router.get('/users', (req, res) => {

    userModel.find().lean().then((users) => {
        res.send({ "success": true, "data": users })
    })
})

router.get('/user/:id', (req, res) => {

    userModel.findById(req.params.id).lean().then((users) => {
        res.send({ "success": true, "data": users })
    })
})

// using post method to update the object
router.post('/update-user', (req, res) => {
    userModel.findByIdAndUpdate(req.body.id, req.body).then(() => {

        userModel.findById(req.body.id).lean().then((user) => {
            res.send({ success: true, message: "User Updated", data: user })
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

router.delete('/delete-user/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({ success: true, message: "User Deleted" })
    })
})


/* ADDON MANAGEMENT ROUTES*/
//  create addon
router.post("/create-addon", (req, res) => {

    addOnModel.create(req.body).then((user) => {
        res.send(user)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

// get all addons
router.get("/addons", (req, res) => {
    addOnModel.find().lean().then((addons) => {
        res.send({ success: true, data: addons })
    })
})

router.get("/addon/:id", (req, res) => {
    addOnModel.findById(req.params.id).lean().then((user) => {
        res.send({ success: true, data: user })
    })

})

router.post("/update-addon", (req, res) => {
    addOnModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        addOnModel.findById(req.body.id).lean().then((user) => {
            res.send({ success: true, message: "addon Updated", data: user })
        })
    })
})

router.delete("/delete-addon/:id", (req, res) => {
    addOnModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({ success: true, message: "Addon Deleted" })
    })
})



router.delete('/delete-user/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id, req.body).then(() => {
        res.send({ success: true, msg: "user deleted" });





    })
})


/* BANK MANAGEMENT ROUTES*/
//  create bank
router.post("/create-bank", (req, res) => {

    addOnModel.create(req.body).then((bank) => {
        res.send(bank)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

// get all banks
router.get("/banks", (req, res) => {
    addOnModel.find().lean().then((banks) => {
        res.send({ success: true, data: banks })
    })
})
// get a bank
router.get("/bank/:id", (req, res) => {
    addOnModel.findById(req.params.id).lean().then((bank) => {
        res.send({ success: true, data: bank })
    })

})
// edit a bank

router.post("/update-bank", (req, res) => {
    addOnModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        addOnModel.findById(req.body.id).lean().then((bank) => {
            res.send({ success: true, message: "addon Updated", data: bank })
        })
    })
})
// delete a bank

router.delete("/delete-bank/:id", (req, res) => {
    addOnModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({ success: true, message: "bank Deleted" })
    })
})



















module.exports = router