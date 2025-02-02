const express = require('express');
const router = express.Router();
const userRoutes = require('./users');

/* router test */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

router.get('/test', (req, res) => { 
  res.json({ message: 'User routes are working!' });
});


/* ----- routes ----- */
router.use('/users', userRoutes);



module.exports = router;

