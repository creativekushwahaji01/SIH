const express = require('express');
const router = express.Router();
const coalschema = require('../models/Coalfieldinindia');


// GET endpoint to fetch coal fields data
router.get('/coalfieldindia', async (req, res) => {
    try {
        const coalfields = await coalschema.find({});
        if (!coalfields || coalfields.length === 0) {
            return res.status(404).send({ message: 'No coalfields found' });
        }
        res.json(coalfields);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: false, message: err.message });
    }
});

// POST endpoint to add new coal fields data
router.post('/coalfieldindia', async (req, res) => {
    try {
        // Add new data from request body
        const { State, Coal_Field, Resources, Proved_Reserves } = req.body;
        if (!State || !Coal_Field || !Resources || Proved_Reserves === undefined) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newData = new coalschema({
            State,
            Coal_Field,
            Resources,
            Proved_Reserves
        });

        await newData.save();
         res.status(201).json({ success: true, data: newData });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: false, message: err.message });
    }
});

module.exports = router;
