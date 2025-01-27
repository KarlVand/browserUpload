const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: 'THIS IS MY NEW TEST MESSAGE' });
});

app.listen(5000, () => {
    console.log('Test server running on port 5000');
});