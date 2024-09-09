const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Userschema');

const router = express.Router();
console.log("router loaded");

// Signup route
router.post('/signup', async function(req, res) {  
    const { name, email, mobile, organisation, password, repassword } = req.body;

    try {
        if (!name || !email || !mobile || !organisation || !password || !repassword) {
            return res.status(400).json({ msg: 'All fields are required' });
        }
        if (!email) {
            return res.status(400).json({ msg: 'Email is required' });
        }
        if (password !== repassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({ name, email, mobile, organisation, password });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ msg: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { id: user.id, name: user.name, role: user.role};
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
