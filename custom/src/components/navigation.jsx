import React from 'react';

function Navigation() {
  return (
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
  );
}

export default Navigation;
