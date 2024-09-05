require('dotenv').config();
const bcrypt = require('bcrypt');
const express = require('express');
const connectDB = require('./database/connection'); 
const userRoutes = require('./routes/Authantication');
const isauthenticated = require('./middleware/Authmiddleware');
const emissionhistory = require('./routes/Emissionhistory');
const calcemmi = require('./routes/Emission')
const app = express()
connectDB();
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Hello, World!')
});

app.use('/', userRoutes);
app.use('/',isauthenticated);
app.use('/',calcemmi);
app.use('/',emissionhistory);




// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
