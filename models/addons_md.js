const mongoose = require ('mongoose');
const Schema = mogoose.Schema;

const addonsSchema = new Schema({
    name:{String, required:true},
    amount:{Number, required: true},
})

const addons = mongoose.model('addons', addonsSchema)
module.exports = addons