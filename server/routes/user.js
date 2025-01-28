const express = require('express');

const router = express.Router();
const { defineUserModel } = require('../models/user');

app

module.exports = (User) => {
    const userRoutes = {};
    
    app.use('/api/users', userRoutes);
    
    /* get other message */
    userRoutes.register = router.get('/test', (req, res) => {
        res.json({ message: 'User routes are working!' });
    });

    

    // Register route
    userRoutes.register = router.post('/register', async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const user = await User.create({ email, username, password });
            res.json({ message: 'User created successfully', userId: user.id });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    return userRoutes;
};