const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: [
    {
      x: {
        type: String,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
    },
  ],
});

const ChartData = mongoose.model('ChartData', chartDataSchema);

module.exports = ChartData;
