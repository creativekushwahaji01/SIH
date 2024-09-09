const express = require('express');
const router = express.Router();
const Emission = require('../models/Emissiondata');

// Fetch emission calculation history
router.get("/calchistory", async (req, res) => {
    try {
        const emissions = await Emission.find().sort({ createdAt: -1 }).limit(10);
        res.json(emissions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Calculate emissions
router.post('/calculate', async (req, res) => {
    try {
        const { excavation, transportation, otherEquipment, electricityUsage } = req.body;

        if (!excavation || !transportation || !otherEquipment || !electricityUsage) {
            return res.status(400).json({ success: false, msg: 'All fields are required' });
        }

        // Emission factors (example values)
        const fuelEmissionFactors = {
            diesel: 2.7,
            gasoline: 2.3,
            lpg: 1.66,
            cng: 1.30
        };
        const electricityEmissionFactor = 0.5;

        // Calculate emissions for each activity
        const excavationEmission = excavation.fuelQuantity * (fuelEmissionFactors[excavation.fuelType.toLowerCase()] || 0);
        const transportationEmission = transportation.fuelQuantity * (fuelEmissionFactors[transportation.fuelType.toLowerCase()] || 0);
        const otherEquipmentEmission = otherEquipment.fuelQuantity * (fuelEmissionFactors[otherEquipment.fuelType.toLowerCase()] || 0);
        const electricityEmission = electricityUsage.usageInKwh * electricityEmissionFactor;

        const totalEmission = excavationEmission + transportationEmission + otherEquipmentEmission + electricityEmission;

        // Save emission data to the database
        const newEmission = new Emission({
            excavation,
            transportation,
            otherEquipment,
            electricityUsage,
            totalEmission
        });

        await newEmission.save();
        res.status(201).json({ success: true, data: newEmission });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
