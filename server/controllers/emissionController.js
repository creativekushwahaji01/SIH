const Emission = require('../schema/Emissionschema'); // Ensure the path is correct

exports.calculateEmissions = async (req, res) => {
  try {
    const { activityType, activityDetails, emissionFactor, quantity } = req.body;

    // Validate input data
    if (!activityType || !emissionFactor || !quantity) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // Create a new emission record
    const emission = new Emission({
      activityType,
      activityDetails,
      emissionFactor,
      quantity,
    });

    // Calculate total emissions
    emission.totalEmissions = emission.quantity * emission.emissionFactor;

    // Suggest neutralization strategies
    emission.neutralizationStrategy = suggestNeutralization(emission.totalEmissions);

    // Save the record
    await emission.save();

    res.status(201).json({ success: true, data: emission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const suggestNeutralization = (totalEmissions) => {
  if (totalEmissions > 1000) {
    return 'Plant 100 trees';
  } else if (totalEmissions > 500) {
    return 'Switch to renewable energy';
  } else {
    return 'Optimize transportation routes';
  }
};
