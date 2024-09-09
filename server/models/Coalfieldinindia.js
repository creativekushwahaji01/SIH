const mongoose = require('mongoose');

const coalFieldSchema = new mongoose.Schema({
    State: { type: String, required: true },
    Coal_Field: { type: String, required: true },
    Resources: { type: Number, required: true },
    Proved_Reserves: { type: Number, required: false }
});

const CoalField = mongoose.model('CoalField', coalFieldSchema);

module.exports = CoalField;
