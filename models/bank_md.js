const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bankSchema = new Schema({
    name:{type:String, required: true}
})

const bank = mongoose.model("bank", bankSchema)
module.exports = bank