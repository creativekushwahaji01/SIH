import React, { useState } from 'react';
import './App.css';
import './index.css'
import EmissionSection from './components/emissionSection';
import SinkSection from './components/sinkSection';
import GapAnalysis from './components/gapAnalysis';
import Pathways from './components/pathWays';


function App() {
  const [activity, setActivity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [distance, setDistance] = useState('');
  const [emission, setEmission] = useState(0);
  const [oxygenRequired, setOxygenRequired] = useState(0);
  const [treesRequired, setTreesRequired] = useState(0);
  const [selectedWaste, setSelectedWaste] = useState('');

  // Waste Information Functions
  const getWasteTitle = (wasteType) => {
    switch (wasteType) {
      case 'overburden': return 'Overburden and Spoil';
      case 'tailings': return 'Coal Rejects/Tailings';
      case 'amd': return 'Acid Mine Drainage (AMD)';
      case 'slurry': return 'Coal Slurry/Sludge';
      case 'dust': return 'Dust and Particulate Matter';
      case 'methane': return 'Methane Emissions';
      case 'toxins': return 'Heavy Metals and Toxins';
      default: return '';
    }
  };
  
  const getWasteDescription = (wasteType) => {
    switch (wasteType) {
      case 'overburden': return 'Overburden refers to the soil and rock removed to access coal seams.';
      case 'tailings': return 'Leftover material after coal processing containing impurities.';
      case 'amd': return 'Acidic water formed when sulfide minerals are exposed to air and water.';
      case 'slurry': return 'A mixture of water and coal fines produced during processing.';
      case 'dust': return 'Dust generated during mining, transport, and handling of coal.';
      case 'methane': return 'Methane released during coal extraction, a potent greenhouse gas.';
      case 'toxins': return 'Heavy metals and toxins leached from mining waste materials.';
      default: return 'Please select a waste type from the dropdown.';
    }
  };
  
  const getManagementTitle = (wasteType) => 'Management Strategy';
  
  const getManagementStrategy = (wasteType) => {
    switch (wasteType) {
      case 'overburden': return 'Land reclamation, backfilling, and vegetation.';
      case 'tailings': return 'Stored in tailings dams, dry stacking, and recycling.';
      case 'amd': return 'Neutralization with lime, constructed wetlands.';
      case 'slurry': return 'Dewatering, safe containment, and reuse of water.';
      case 'dust': return 'Water spraying, dust suppressants, enclosed conveyors.';
      case 'methane': return 'Methane capture and utilization as energy.';
      case 'toxins': return 'Containment, treatment, and safe disposal.';
      default: return 'Select a waste type to see its management strategy.';
    }
  };

  // Handlers for Emission Calculation
  const handleActivityChange = (e) => {
    setActivity(e.target.value);
    setQuantity('');
    setDistance('');
    setFuelType('');
    setEmission(0); // Reset emission
    setOxygenRequired(0); // Reset oxygen required
    setTreesRequired(0); // Reset trees required
  };

  const handleQuantityChange = (e) => {
    // Remove leading zeros and parse the value
    const value = e.target.value.replace(/^0+/, '') || '0';
    setQuantity(value);
  };

  const handleDistanceChange = (e) => {
    // Remove leading zeros and parse the value
    const value = e.target.value.replace(/^0+/, '') || '0';
    setDistance(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const parsedQuantity = parseFloat(quantity) || 0;
    const parsedDistance = parseFloat(distance) || 0;

    let emissionValue = 0;

    if (activity === 'mining') {
      if (parsedQuantity <= 0) {
        alert("Please enter a positive quantity.");
        return;
      }

      if (fuelType === 'diesel') {
        emissionValue = parsedQuantity * 50 * 2.7;
      } else if (fuelType === 'gasoline') {
        emissionValue = parsedQuantity * 55 * 2.3;
      }
    } else if (activity === 'transportation') {
      if (parsedDistance <= 0) {
        alert("Please enter a positive distance.");
        return;
      }

      if (fuelType === 'diesel') {
        emissionValue = parsedDistance * 0.5 * 2.7;
      } else if (fuelType === 'gasoline') {
        emissionValue = parsedDistance * 0.4 * 2.3;
      } else if (fuelType === 'LPG') {
        emissionValue = parsedDistance * 0.3 * 1.9;
      } else if (fuelType === 'CNG') {
        emissionValue = parsedDistance * 0.2 * 1.5;
      }
    }

    setEmission(emissionValue);
    setOxygenRequired(emissionValue * 2.29);
    setTreesRequired(emissionValue / 0.022);
  };

  return (
    <div className="App bg-gray-100 text-gray-900 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-zinc-600 text-white py-6">
        <h1 className="text-4xl font-bold text-center">Carbon Emission Quantification</h1>
      </header>

      {/* Navigation */}
      <nav className="bg-zinc-500 text-white py-4 shadow-lg mb-0">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Carbon Emissions</a>
          <button className="menu-toggle focus:outline-none md:hidden">
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#input-section" className="hover:text-green-300">Input Data</a></li>
            <li><a href="#results-section" className="hover:text-green-300">Results</a></li>
            <li><a href="#waste-section" className="hover:text-green-300">Waste Management</a></li>
          </ul>
        </div>
      </nav>

      {/* Video Section */}
      <div id="video-container" className="relative overflow-hidden h-96">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted src="/MINING DRONE SHOWREEL(720P_HD).mp4"></video>
        <div className="relative bg-black bg-opacity-40 p-8 text-white">
          <h2 className="text-3xl font-bold">Welcome to the Carbon Emission Quantification Tool</h2>
        </div>
      </div>

      {/* Input Section */}
      <section id="input-section" className="py-10 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Input Mining and Transportation Activity Data</h2>
          <form id="emission-form" onSubmit={handleFormSubmit} className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
            {/* Activity Type */}
            <label htmlFor="activity" className="block text-lg font-medium mb-2">Activity Type:</label>
            <select id="activity" name="activity" value={activity} onChange={handleActivityChange} className="w-full p-2 border border-gray-300 rounded mb-4">
              <option value="" disabled>Select an activity</option>
              <option value="mining">Mining</option>
              <option value="transportation">Transportation</option>
            </select>

            {/* Quantity for Mining */}
            {activity === 'mining' && (
              <div className="form-group mb-4">
                <label htmlFor="quantity" className="block text-lg font-medium mb-2">Quantity (in tons):</label>
                <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} className="w-full p-2 border border-gray-300 rounded" />
              </div>
            )}

            {/* Distance for Transportation */}
            {activity === 'transportation' && (
              <div className="form-group mb-4">
                <label htmlFor="distance" className="block text-lg font-medium mb-2">Distance Traveled (in km):</label>
                <input type="number" id="distance" name="distance" value={distance} onChange={handleDistanceChange} className="w-full p-2 border border-gray-300 rounded" />
              </div>
            )}

            {/* Fuel Type */}
            <label htmlFor="fuelType" className="block text-lg font-medium mb-2">Fuel Type:</label>
            <select id="fuelType" name="fuelType" value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="w-full p-2 border border-gray-300 rounded mb-4">
              <option value="" disabled>Select a fuel type</option>
              {activity === 'mining' && (
                <>
                  <option value="diesel">Diesel</option>
                  <option value="gasoline">Gasoline</option>
                </>
              )}
              {activity === 'transportation' && (
                <>
                  <option value="diesel">Diesel</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="LPG">LPG</option>
                  <option value="CNG">CNG</option>
                </>
              )}
            </select>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Calculate Emission</button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section id="results-section" className="py-10 bg-gray-100">
  <div className="container mx-auto">
    <div className="results-container grid gap-8">
      {activity === 'mining' && (
        <div id="mining-results" className="results-box p-6 bg-green-200 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-green-800">Mining Activity Results</h2>
          <p className="text-xl font-bold text-green-900 mb-4">Emission: <span className="text-2xl font-extrabold">{emission.toFixed(2)}</span> kg CO₂</p>
          <p className="text-xl font-bold text-green-900 mb-4">Oxygen Required: <span className="text-2xl font-extrabold">{oxygenRequired.toFixed(2)}</span> kg O₂</p>
          <p className="text-xl font-bold text-green-900">Trees Required: <span className="text-2xl font-extrabold">{treesRequired.toFixed(2)}</span> trees</p>
        </div>
      )}
      {activity === 'transportation' && (
        <div id="transportation-results" className="results-box p-6 bg-green-200 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-green-800">Transportation Activity Results</h2>
          <p className="text-xl font-bold text-green-900 mb-4">Emission: <span className="text-2xl font-extrabold">{emission.toFixed(2)}</span> kg CO₂</p>
          <p className="text-xl font-bold text-green-900 mb-4">Oxygen Required: <span className="text-2xl font-extrabold">{oxygenRequired.toFixed(2)}</span> kg O₂</p>
          <p className="text-xl font-bold text-green-900">Trees Required: <span className="text-2xl font-extrabold">{treesRequired.toFixed(2)}</span> trees</p>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Waste Management Section */}
      <section id="waste-section" className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Coal Mining Waste Management</h1>
        <select
          id="waste-dropdown"
          value={selectedWaste}
          onChange={(e) => setSelectedWaste(e.target.value)}
          className="mb-6 p-2 border rounded-md"
        >
          <option value="">Select Waste Type</option>
          <option value="overburden">Overburden and Spoil</option>
          <option value="tailings">Coal Rejects/Tailings</option>
          <option value="amd">Acid Mine Drainage (AMD)</option>
          <option value="slurry">Coal Slurry/Sludge</option>
          <option value="dust">Dust and Particulate Matter</option>
          <option value="methane">Methane Emissions</option>
          <option value="toxins">Heavy Metals and Toxins</option>
        </select>

        <div id="waste-info" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Waste Information Card */}
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${
              selectedWaste ? "bg-red-100" : "bg-gray-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {selectedWaste ? getWasteTitle(selectedWaste) : "Select a Waste Type"}
            </h2>
            <p className="text-gray-700">
              {selectedWaste ? getWasteDescription(selectedWaste) : "Please select a waste type from the dropdown."}
            </p>
          </div>

          {/* Management Strategy Card */}
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${
              selectedWaste ? "bg-green-200" : "bg-gray-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {selectedWaste ? getManagementTitle(selectedWaste) : "Management Strategy"}
            </h2>
            <p className="text-gray-700">
              {selectedWaste ? getManagementStrategy(selectedWaste) : "Select a waste type to see its management strategy."}
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Carbon Emission & Neutrality Plan</h1>
        
        {/* Carbon Emission Section */}
        <EmissionSection />

        {/* Carbon Sink Estimation Section */}
        <SinkSection />

        {/* Gap Analysis Section */}
        <GapAnalysis />

        {/* Pathways to Carbon Neutrality */}
        <Pathways />
      </div>
    </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 Carbon Emission Quantification Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
