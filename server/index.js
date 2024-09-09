require('dotenv').config();
const bcrypt = require('bcrypt');
const express = require('express');
const path = require('path');
const connectDB = require('./database/connection'); 
const userRoutes = require('./routes/Authentication'); 
const isauthenticated = require('./middleware/Authmiddleware');
const mindata = require('./routes/Miningdataroutes');
const chartdata = require('./routes/Chartsroutes');
const emission = require('./routes/Calcemission');
const coaldispatch = require('./routes/Coaldispatchroute');
const Indiancoalfields = require('./routes/Coalfieldindiaroutes');

const app = express();
app.set('view engine', 'ejs');

connectDB();
app.use(express.json());

// Optionally run data insertion separately or handle it in a more controlled manner
// addingdata(); // Consider running this script separately or handling it properly

// Serve static files
app.use(express.static(path.join(__dirname, 'templates')));

const title = 'Coal';

// app.get('/', async (req, res) => {
//     try {
//         // Fetch data directly from the database
//         const miningData = await mindata.getMiningData(); // Ensure this method exists in Miningdataroutes
//         console.log('Mining Data:', miningData); // Debugging line
//         res.render('index', { title, miningData });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error fetching data");
//     }
// });

// Routes
app.use('/', userRoutes);
app.use("/test", chartdata);
app.use("/test", emission);
app.use("/test", mindata);
app.use("/test", coaldispatch);
app.use("/test",Indiancoalfields)

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
