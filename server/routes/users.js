const express = require('express');
const router = express.Router();
let User = require('../models/user');

/* get other message */
router.get('/test', (req, res) => { 
    res.json({ message: 'User routes are working!' });
});
// Register route
router.post('/register', async (req, res) => {
    try {         
        const {  username, email, password } = req.body;
        const user = await User.create({  username, email, password });
        res.json({ message: 'User created successfully', userId: user.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;


    

