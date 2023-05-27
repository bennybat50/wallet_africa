const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    bankName:{type:String, required:true},
    cardNumber:{type:Number, required: true},
    cardNumber:{type:String, required:true},
    cardCvv:{type:Number, required: true},
    cardExpdate:{type:String, required:true},
    userId:{type:String, required: true},
})

const card = mongoose.model("card", cardSchema)
module.exports = card