// MODELS
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose_dashboard', {userNewUrlParser: true});

const PlatypusSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Need to give platypus a name"]},
    age: {type: Number}
}, {timestamps:true})

const Platypus = mongoose.model('Platypus', PlatypusSchema);

module.exports = Platypus