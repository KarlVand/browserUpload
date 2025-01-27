const express = require('express');
const router = express.Router();


// Route 1: Root path
app.get('/', (req, res) => {
    res.json({ message: 'This is the root path!' });
}); 

// Root route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Test route working!' });
});

module.exports = router;