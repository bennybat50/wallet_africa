const express=require('express')
const router=express.Router()
const userModel=require('../models/user_md')
const addOnModel = require('../models/addons_md')
const bankModel= require('../models/bank_md')
const accountModel= require('../models/account_md')
const transactionModel= require('../models/transaction_md')
const currencyModel= require('../models/currency_md')
const walletModel= require('../models/wallet_md')
const cardModel=require('../models/card_md')
let multer   = require("multer");
let fs = require('fs');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let __dir =  path.join(__dirname,'../public/uploads',); 
        cb(null, __dir);
    },
    filename: function (req, file, cb) {
            let filename = file.originalname.toLowerCase();
            cb(null, filename);
        }
    });
let upload = multer({storage});



//USER MANAGEMENT ROUTES
router.post('/create-user', upload.any(), (req, res) => {
    console.log(req.files[0].filename)
    req.body.image = req.file[0].filename
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

router.post('/update-user',upload.any(), (req, res) => {
    req.body.image = req.files[0].filename
    userModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        userModel.findById(req.body.id).lean().then((user) => {
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



/* BANK MANAGEMENT ROUTES*/
//  create bank
router.post("/create-bank", (req, res) => {

    bankModel.create(req.body).then((bank) => {
        res.send(bank)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

// get all banks
router.get("/banks", (req, res) => {
    bankModel.find().lean().then((banks) => {
        res.send({ success: true, data: banks })
    })
})
// get a bank
router.get("/bank/:id", (req, res) => {
    bankModel.findById(req.params.id).lean().then((bank) => {
        res.send({ success: true, data: bank })
    })

})
// edit a bank

router.post("/update-bank", (req, res) => {
    bankModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        bankModel.findById(req.body.id).lean().then((bank) => {
            res.send({ success: true, message: "addon Updated", data: bank })
        })
    })
})
// delete a bank

router.delete("/delete-bank/:id", (req, res) => {
    bankModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({ success: true, message: "bank Deleted" })
    })
})


//ACCOUNT MANAGEMENT ROUTES
router.post('/create-account', (req, res)=>{

    accountModel.create(req.body).then((account)=>{
        res.send(account)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

router.get('/accounts', (req, res) => {
    accountModel.find().lean().then((accounts) => {
        res.send({success:true, data:accounts})
    })
})

router.get('/account/:id', (req, res) => {
    accountModel.findById(req.params.id).lean().then((account) => {
        res.send({success:true, data:account})
    })
})

router.put('/update-account/:id', (req, res) => {
    accountModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
        accountModel.findById(req.params.id).lean().then((account) => {
            res.send({success:true, msg:"Account Detail Updated", data:account})
        })
    })
})

router.post('/update-account', (req, res) => {
    accountModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        accountModel.findById(req.body.id).lean().then((account) => {
            res.send({success:true, msg:"Account Updated", data:account})
        })
    })
})

router.delete('/delete-account/:id', (req, res) => {
    accountModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({success:true, msg:"Account Deleted"})
    })
})


//TRANSACTION MANAGEMENT ROUTES
router.post('/create-transaction', (req, res)=>{
    transactionModel.create(req.body).then((transaction)=>{
        res.send(transaction)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

router.get('/transactions', (req, res) => {
    transactionModel.find().lean().then((transactions) => {
        res.send({success:true, data:transactions})
    })
})

router.get('/transaction/:id', (req, res) => {
    transactionModel.findById(req.params.id).lean().then((transaction) => {
        res.send({success:true, data:transaction})
    })
})

router.put('/update-transaction/:id', (req, res) => {
    transactionModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
        transactionModel.findById(req.params.id).lean().then((transaction) => {
            res.send({success:true, msg:"Transaction Detail Updated", data:transaction})
        })
    })
})

router.post('/update-transaction', (req, res) => {
    transactionModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        transactionModel.findById(req.body.id).lean().then((transaction) => {
            res.send({success:true, msg:"Transaction Updated", data:transaction})
        })
    })
})

router.delete('/delete-transaction/:id', (req, res) => {
    transactionModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({success:true, msg:"Trasaction Deleted"})
    })
})


// CURRENCY MANAGEMENT ROUTES
router.post('/create-currency', (req, res)=>{

    currencyModel.create(req.body).then((currency)=>{
        res.send(currency)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

router.get('/currencies', (req, res) => {
    currencyModel.find().lean().then((currencies) => {
        res.send({success:true, data:currencies})
    })
})

router.get('/currency/:id', (req, res) => {
    currencyModel.findById(req.params.id).lean().then((currency) => {
        res.send({success:true, data:currency})
    })
})

router.put('/update-currency/:id', (req, res) => {
    currencyModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
        currencyModel.findById(req.params.id).lean().then((currency) => {
            res.send({success:true, msg:"Currency Updated", data:currency})
        })
    })
})

router.post('/update-currency', (req, res) => {
    currencyModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        currencyModel.findById(req.body.id).lean().then((currency) => {
            res.send({success:true, msg:"Currency Updated", data:currency})
        })
    })
})

router.delete('/delete-currency/:id', (req, res) => {
    currencyModel.findByIdAndDelete(req.params.id).then(() => {
        res.send({success:true, msg:"Currency Deleted"})
    })
})

router.get('/users', (req, res) => {
    userModel.find().lean().then((users) =>{
        res.send({success:true, data:users})
    })
})

router.get('/user/:id', (req, res) => {
    userModel.findById(req.params.id).lean().then((user) =>{
        res.send({success:true, data:user})
    })
})

// router.put('/update-user/:id', (req, res) => {

//     userModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
    
//         userModel.findById(req.params.id).lean().then((user) =>{
//             res.send({success:true, msg:"User Updated",  data:user})

//         })

//     })
   
// })
// for security reasons make every request a post request
router.post('/update-user', (req, res) => {

    userModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
    
        userModel.findById(req.body.id).lean().then((user) =>{
            res.send({success:true, msg:"User Updated",  data:user})

        })

    })
   
})


router.delete('/delete-user/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id).lean().then(() =>{
        res.send({success:true, msg:"user Deleted"})
    })
})



// CARD MANAGEMENT
router.post('/create-card', (req, res)=>{

    cardModel.create(req.body).then((card)=>{
        res.send(card)
        
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
    
})

router.get('/cards', (req, res) => {
    cardModel.find().lean().then((cards) =>{
        res.send({success:true, data:cards})
    })
})

router.get('/card/:id', (req, res) => {
    cardModel.findById(req.params.id).lean().then((card) =>{
        res.send({success:true, data:card})
    })
})

router.post('/update-card', (req, res) => {

    cardModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
    
        cardModel.findById(req.body.id).lean().then((card) =>{
            res.send({success:true, msg:"Card Updated", data:card})

        })

    })
   
})

router.delete('/delete-card/:id', (req, res) => {
    cardModel.findByIdAndDelete(req.params.id).lean().then(() =>{
        res.send({success:true, msg:"card Deleted"})
    })
})

// CREATE
router.post('/create-wallet', (req, res)=>{

    walletModel.create(req.body).then((user)=>{
        res.send(user)
        
    }).catch((err)=>{
        console.log(err);
        res.send({"error":true, "message":err})
    })
    
})

// GET
router.get('/wallets', (req, res)=> {
    walletModel.find().lean().then((users)=>{
    res.send({success:true, data:users})
})

})

// GET BY ID
router.get('/wallet/:id', (req, res)=> {
    walletModel.findById(req.params.id).lean().then((users)=>{
    res.send({success:true, data:users})
})

})

// EDIT
router.put('/update-wallet/:id', (req, res)=> {
    walletModel.findByIdAndUpdate(req.params.id, req.body).then(()=>{

    walletModel.findById(req.params.id).lean().then((user)=>{
        res.send({success:true,msg:"Wallet Updated", data:user})
    })
   
})

})


// DELETE
router.delete('/delete-wallet/:id', (req, res)=> {
 
    walletModel.findByIdAndRemove(req.params.id).then(()=>{
    res.send({success:true, msg:"Wallet Deleted"})
})

})


module.exports=router
