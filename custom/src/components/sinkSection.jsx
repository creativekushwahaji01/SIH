import React from 'react';

const SinkSection = () => {
  const carbonSinks = [
    { type: 'Forest Area', capacity: 120 },
    { type: 'Soil Carbon', capacity: 50 },
    { type: 'Other Vegetation', capacity: 30 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Estimation of Carbon Sinks</h2>
      <ul>
        {carbonSinks.map((sink, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{sink.type}:</span> Absorbs {sink.capacity} tons of CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinkSection;
