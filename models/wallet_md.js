const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    user_id:{String, required: true},
    account_id:{String, required:true},
    balance:{String, required:true},
    date_created:{String, required: true}
})

const wallet = mongoose.model("wallet", walletSchema)
module.exports = wallet