const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    user_id:{type:String, required: true},
    account_id:{type:String, required:true},
    balance:{type:String, required:true},
    date_created:{type:String, required: true}
})

const wallet = mongoose.model("wallet", walletSchema)
module.exports = wallet