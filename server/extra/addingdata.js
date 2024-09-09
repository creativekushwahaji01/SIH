const mongoose = require('../database/connection'); // Import your connection setup
const CoalProduction = require('../models/Miningdatamodel'); // Adjust the path as needed

const data = [
  { year: "2012-13", CIL: 452.20, SCCL: 53.19, Others_Captive: 51.01, Total: 556.40 },
  { year: "2013-14", CIL: 462.41, SCCL: 50.47, Others_Captive: 52.88, Total: 565.77 },
  { year: "2014-15", CIL: 494.23, SCCL: 52.54, Others_Captive: 62.41, Total: 609.18 },
  { year: "2015-16", CIL: 538.75, SCCL: 60.38, Others_Captive: 40.09, Total: 639.23 },
  { year: "2016-17", CIL: 554.14, SCCL: 61.34, Others_Captive: 42.39, Total: 657.87 },
  { year: "2017-18", CIL: 567.37, SCCL: 62.01, Others_Captive: 46.03, Total: 675.40 },
  { year: "2018-19", CIL: 606.89, SCCL: 64.40, Others_Captive: 57.43, Total: 728.72 },
  { year: "2019-20", CIL: 602.13, SCCL: 64.04, Others_Captive: 64.70, Total: 730.87 },
  { year: "2020-21", CIL: 596.22, SCCL: 50.58, Others_Captive: 69.29, Total: 716.08 },
  { year: "2021-22", CIL: 622.63, SCCL: 65.02, Others_Captive: 90.53, Total: 778.20 },
  { year: "2022-23", CIL: 703.22, SCCL: 67.14, Others_Captive: 122.72, Total: 893.08 }
];

const addingdata = async (data) => {
  try {
    await CoalProduction.insertMany(data);
    console.log('Data added successfully');
  } catch (error) {
    console.error('Error adding data:', error);
  } 
};

addingdata(data);
