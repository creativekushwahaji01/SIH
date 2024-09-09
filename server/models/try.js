const mongoose = require('mongoose');

const tryschema = new mongoose.Schema({
msg:{
    type: String,
    required: true
}
})

module.exports = mongoose.model('Try', tryschema);