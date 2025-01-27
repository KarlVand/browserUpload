const express = require('express');
const router = express.Router();

module.exports = (User) => {
    
    router.get('/test', (req, res) => {
        res.json({ message: 'User routes are working!' });
    });

    // Register route
    router.post('/register', async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const user = await User.create({ email, username, password });
            res.json({ message: 'User created successfully', userId: user.id });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    return router;
};