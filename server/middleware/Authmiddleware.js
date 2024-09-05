const express = require('express');
const router= express.Router();
// const router=express.Router()

const Adminmiddleware = async (req, res, next) => {
    console.log(req.body)
    if (req.user && req.user.role === 'admin') {
        res.status(200).send("admin")
        return next();
    } else {
        res.status(401).send('Unauthsorized');
    }
};

router.get('/admin', Adminmiddleware, (req, res) => {
    res.send('Admin Page');
});
    
module.exports = router;
