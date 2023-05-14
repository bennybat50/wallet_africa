const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    bank_name:{type:String, required:true},
    card_number:{type:Number, required: true},
    card_type:{type:String, required:true},
    card_cvv:{type:Number, required: true},
    card_expdate:{type:String, required:true},
    user_id:{type:String, required: true},
})

const card = mongoose.model("card", cardSchema)
module.exports = card