import React from 'react';

const GapAnalysis = () => {
  const totalEmissions = 450; // Sum from EmissionSection
  const totalSinks = 200; // Sum from SinkSection
  const gap = totalEmissions - totalSinks;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Gap Analysis</h2>
      <p>
        <span className="font-bold">Total Emissions:</span> {totalEmissions} tons of CO₂
      </p>
      <p>
        <span className="font-bold">Total Carbon Sinks:</span> {totalSinks} tons of CO₂
      </p>
      <p className={`font-bold mt-4 ${gap > 0 ? 'text-red-500' : 'text-green-500'}`}>
        {gap > 0 ? `Carbon Deficit: ${gap} tons of CO₂` : `No Gap: Achieving Carbon Neutrality`}
      </p>
    </div>
  );
};

export default GapAnalysis;
