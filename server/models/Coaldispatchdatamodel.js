const mongoose = require('mongoose');

const Miningdatadispatchhistory = new mongoose.Schema({
  year: { type: String, required: true },
  CIL: { type: Number, required: true },
  SCCL: { type: Number, required: true },
  Others_Captive: { type: Number, required: true },
  Total: { type: Number, required: true }
});

const mindata = mongoose.model('Miningdatadispatchhistory', Miningdatadispatchhistory);

module.exports = mindata;
