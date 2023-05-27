const mongoose=require('mongoose')
const Schema=mongoose.Schema

//hello
const userSchema=new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    address:{type:String, required:true},
    bvn:{type:String, required:true,},
    gender:{type:String, required:true},
    status:{type:Boolean},
    image: {type:String, required: false},
 })

const users=mongoose.model("Users", userSchema)
module.exports=users