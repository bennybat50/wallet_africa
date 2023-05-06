const mongoose=require('mongoose')
const Schema=mongoose.Schema

//hello
const userSchema=new Schema({
    firstName:{String, required:true},
    lastName:{String, required:true},
    email:{String, required:true},
    phone:{String, required:true},
    address:{String, required:true},
    bvn:{String, required:true,},
    gender:{String, required:true},
    status:{Boolean},
 })

const users=mongoose.model("Users", userSchema)
module.exports=users