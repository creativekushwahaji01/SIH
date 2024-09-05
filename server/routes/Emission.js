const express = require('express');
const router=express.Router();
const Emissiondata = require('../schema/Emissionschema')

// Emission factors data
const emissionFactors = {
  diesel: {
    mining: 2.7, // kg CO2 per liter
    transportation: 2.7, // kg CO2 per liter
  },
  gasoline: {
    mining: 2.3, // kg CO2 per liter
    transportation: 2.3, // kg CO2 per liter
  },
  LPG: {
    mining: 0.234, // kg CO2 per kWh
    transportation: 1.66, // kg CO2 per kWh
  },
  CNG: {
    mining: 0.214, // kg CO2 per kWh
    transportation: 1.30, // kg CO2 per kWh
  },
};

// API endpoint to calculate emission factor
router.post('/calculate', async (req, res) => {
  const { fuelType, activity, quantity, distance } = req.body;

  if (!fuelType || !activity) {
    return res.status(400).json({ error: 'Fuel type and activity are required' });
  }

  let emissionFactor;
  let emission;

  if (activity === 'mining') {
    if (!quantity) {
      return res.status(400).json({ error: 'Quantity is required for mining activity' });
    }

    emissionFactor = emissionFactors[fuelType].mining;
    emission = quantity * emissionFactor;
  } else if (activity === 'transportation') {
    if (!distance) {
      return res.status(400).json({ error: 'Distance is required for transportation activity' });
    }

    emissionFactor = emissionFactors[fuelType].transportation;
    emission = distance * emissionFactor;
  }

  if (!emissionFactor) {
    return res.status(400).json({ error: 'Invalid fuel type or activity' });
  }

  const oxygenRequired = emission * 2.29;
  const treesRequired = emission / 0.022;
  const newEmissiondata = new Emissiondata({emission, oxygenRequired, treesRequired,emissionFactor});
  await newEmissiondata.save();

  res.json({
    emission,
    oxygenRequired,
    treesRequired,
  });
});

module.exports= router;