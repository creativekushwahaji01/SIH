const express = require('express');
const router = express.Router();
const MiningData = require('../models/Miningdatamodel'); // Renamed for clarity

// GET route to fetch mining data
router.get('/mindata', async (req, res) => {
    try {
        // Fetch data from the database
        const mindatas = await MiningData.find();
        if (!mindatas) {
            return res.status(404).json({ message: 'No mining data found' });
        }
        res.status(201).json({success: true, data: mindatas});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// POST route to add new mining data
router.post('/mindata', async (req, res) => {
    try {
        const { year, CIL, SCCL, Others_Captive, Total } = req.body;
        console.log(year, CIL, SCCL, Others_Captive, Total)
        if (!year || !CIL || !SCCL || !Others_Captive || !Total) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new mining data entry
        const newMiningData = new MiningData({
            year,
            CIL,
            SCCL,
            Others_Captive,
            Total
        });

        // Save the new data to the database
        await newMiningData.save();

        res.status(201).json({ success: true, message: newMiningData });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
