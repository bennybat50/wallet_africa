const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transcation_type: { String, required: true },
    amount: { Number, required: true },
    date_time: { String, required: true },
    status: { String, required: true },
    narration: { String, required: true },
    balance: { Number, required: true },
    wallet_id: { String, required: true },
    user_id: { String, required: true }
})

const account = mongoose.model("transaction", transactionSchema)
module.exports = transaction




