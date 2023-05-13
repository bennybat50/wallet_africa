const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const addonsSchema = new Schema({
    name:{type:String, required:true},
    amount:{type:String, required: true},
})

const addons = mongoose.model('addons', addonsSchema)
module.exports = addons