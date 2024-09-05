const express = require('express');
const Emission = require('../schema/Emissionschema');
const router = express.Router();

router.get('/history/:userId', async  (req, res) => {
    try {
        const { userId } = req.params;
        const _id = userId;
        // Fetch user's history from the database
        const history = await Emission.find({ _id})
        .select('activityType emmissionFactor quantity totalEmissions neutralizationStrategy')
        console.log(history);
        res.json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
