const express = require('express');
const ChartData = require('../models/ChartData');
const router = express.Router();

// Route to fetch chart data from MongoDB
router.get('/api/chart', async (req, res) => {
  try {
    const chartData = await ChartData.find(); // Fetch all chart data from MongoDB
    if (chartData.length > 0) {
      console.log("Fetched chart data:", chartData);
      res.json(chartData);
    } else {
      console.log("No chart data found");
      res.status(404).json({ message: "No chart data found" });
    }
  } catch (error) {
    console.error("Error fetching chart data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to save chart data to MongoDB
router.post('/api/chart', async (req, res) => {
  try {
    const { data } = req.body; // Get data from the request body
    if (!data) {
      return res.status(400).json({ message: "Data is required" });
    }
    const newChartData = new ChartData({ data });
    await newChartData.save(); // Save data to MongoDB
    res.status(201).json(newChartData);
  } catch (error) {
    console.error("Error saving chart data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
