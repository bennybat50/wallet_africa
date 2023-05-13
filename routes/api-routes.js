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




router.delete('/delete-user/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id, req.body).then(() => {
        res.send({ success: true, msg: "user deleted" });





    })
})







module.exports = router