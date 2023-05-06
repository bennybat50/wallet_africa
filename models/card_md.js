const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    bank_name:{String, required:true},
    card_number:{Number, required: true},
    card_type:{String, required:true},
    card_cvv:{Number, required: true},
    card_expdate:{String, required:true},
    user_id:{String, required: true}
})

const card = mongoose.model("card", cardSchema)
module.exports = card