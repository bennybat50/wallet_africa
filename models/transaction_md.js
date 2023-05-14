const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transaction_type: {type: String, required: true },
    amount: {type: Number, required: true },
    date_time: { type:String, required: true },
    status: {type: String, required: true },
    narration: { type:String, required: true },
    balance: { type:Number, required: true },
    wallet_id: { type:String, required: true },
    user_id: { type:String, required: true }
})

const transaction = mongoose.model("transaction", transactionSchema)
module.exports = transaction




