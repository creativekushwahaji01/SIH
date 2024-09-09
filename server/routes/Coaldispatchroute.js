const express = require('express');
const router = express.Router();
const dispatchmodel = require('../models/Coaldispatchdatamodel'); // Corrected 'require'

// Route to get all dispatch routes
router.get('/coaldispatchroutes', async (req, res) => {
    try {
        const dispatchroutes = await dispatchmodel.find();
        if (!dispatchroutes || dispatchroutes.length === 0) {
            return res.status(404).json({ message: 'No dispatch routes found' });
        }
        res.json(dispatchroutes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Sample data to be inserted
const data = [
    { year: "2012-13", CIL: 464.54, SCCL: 52.03, Others_Captive: 50.57, Total: 567.14 },
    { year: "2013-14", CIL: 470.92, SCCL: 47.89, Others_Captive: 53.25, Total: 572.06 },
    { year: "2014-15", CIL: 488.86, SCCL: 52.66, Others_Captive: 62.25, Total: 603.77 },
    { year: "2015-16", CIL: 534.08, SCCL: 58.69, Others_Captive: 39.67, Total: 632.44 },
    { year: "2016-17", CIL: 542.98, SCCL: 60.79, Others_Captive: 42.21, Total: 645.98 },
    { year: "2017-18", CIL: 580.01, SCCL: 64.62, Others_Captive: 45.37, Total: 690.00 },
    { year: "2018-19", CIL: 607.95, SCCL: 67.67, Others_Captive: 57.17, Total: 732.79 },
    { year: "2019-20", CIL: 581.23, SCCL: 62.47, Others_Captive: 63.07, Total: 706.77 },
    { year: "2020-21", CIL: 573.63, SCCL: 48.51, Others_Captive: 68.75, Total: 690.89 },
    { year: "2021-22", CIL: 661.89, SCCL: 65.53, Others_Captive: 91.94, Total: 819.36 },
    { year: "2022-23", CIL: 694.70, SCCL: 66.70, Others_Captive: 116.10, Total: 877.50 }
];

// Route to post new dispatch routes
router.post('/coaldispatchroutes', async (req, res) => {
    try {
        await dispatchmodel.insertMany(data); // Corrected method name
        const newDispatchroute = new dispatchmodel(req.body);
        await newDispatchroute.save();
        res.status(201).json({ success: true, data: newDispatchroute });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message }); // Changed from `data` to `message`
    }
});

module.exports = router;
