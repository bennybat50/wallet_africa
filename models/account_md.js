const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    account_type:{type:String, required:true},
    account_number:{type:String, required: true},
    currency_id:{type:String, required:true},
    user_id:{type:String, required: true}
})

const account = mongoose.model("account", accountSchema)
module.exports = account