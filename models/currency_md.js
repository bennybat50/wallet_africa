const mongoose = require('mongoose')
const Schema = mongoose.Schema

const currencySchema = new Schema({
    name:{type:String, required: true}
})

const currency = mongoose.model("currency", currencySchema)
module.exports = currency