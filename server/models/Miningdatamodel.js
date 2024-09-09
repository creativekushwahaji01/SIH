const mongoose = require('mongoose');

const Miningdataproductionhistory = new mongoose.Schema({
  year: { type: String, required: true },
  CIL: { type: Number, required: true },
  SCCL: { type: Number, required: true },
  Others_Captive: { type: Number, required: true },
  Total: { type: Number, required: true }
});

const mindata = mongoose.model('Miningdataproductionhistory', Miningdataproductionhistory);

module.exports = mindata;
