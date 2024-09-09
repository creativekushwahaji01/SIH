import React from 'react';

const EmissionSection = () => {
  const emissions = [
    { activity: 'Mining Operations', emissions: 200 },
    { activity: 'Transportation', emissions: 150 },
    { activity: 'Processing', emissions: 100 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Activity-wise Carbon Emissions</h2>
      <ul>
        {emissions.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.activity}:</span> {item.emissions} tons of CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmissionSection;
