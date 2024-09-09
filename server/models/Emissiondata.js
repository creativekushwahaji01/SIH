const mongoose = require('mongoose');

const EmissionSchema = new mongoose.Schema({
  excavation: {
    fuelType: { type: String, required: true },
    fuelQuantity: { type: Number, required: true }
  },
  transportation: {
    fuelType: { type: String, required: true },
    fuelQuantity: { type: Number, required: true }
  },
  otherEquipment: {
    fuelType: { type: String, required: true },
    fuelQuantity: { type: Number, required: true }
  },
  electricityUsage: {
    usageInKwh: { type: Number, required: true }
  },
  totalEmission: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Emission', EmissionSchema); // Ensure this line is correct
