import React from 'react';

const Pathways = () => {
  const pathways = [
    'Invest in Renewable Energy for Mining Operations',
    'Reforestation and Tree Planting Programs',
    'Increase Efficiency in Transportation',
    'Carbon Capture and Storage (CCS) Implementation',
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Pathways to Carbon Neutrality</h2>
      <ul>
        {pathways.map((path, index) => (
          <li key={index} className="mb-2">
            - {path}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pathways;
