const mongoose = require('mongoose');

const EmissionSchema = new mongoose.Schema({
  activityType: {
    type: String,
    required: true,
    enum: ['mining', 'transportation'],
  },
  activityDetails: {
    type: String,
    required: true,
  },
  emissionFactor: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: function() { return this.activityType === 'mining'; },
  },
  distance: {
    type: Number,
    required: function() { return this.activityType === 'transportation'; },
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['diesel', 'gasoline', 'LPG', 'CNG'],
  },
  totalEmissions: {
    type: Number,
  },
  neutralizationStrategy: {
    type: String,
  },
  date:{
    type: Date,
    default: Date.now,
    index: { expires: 30 * 24 * 60 * 60 } // 30 days expiry time in seconds (30 days * 24 hours/day * 60 minutes/hour * 60 seconds/minute)
  }
});

EmissionSchema.pre('save', function(next) {
  if (this.activityType === 'mining') {
    this.totalEmissions = this.quantity * this.emissionFactor;
  } else if (this.activityType === 'transportation') {
    this.totalEmissions = this.distance * this.emissionFactor;
  }
  next();
});

module.exports = mongoose.model('Emission', EmissionSchema);
