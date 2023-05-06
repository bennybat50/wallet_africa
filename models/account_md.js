const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    account_type:{String, required:true},
    account_number:{Number, required: true},
    currency_id:{String, required:true},
    user_id:{String, required: true}
})

const account = mongoose.model("account", accountSchema)
module.exports = account