const express = require('express');
const router = express.Router();
/* ----- user route & others later ----- */
const userRoutes = require('./users');


/* router test */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});
router.get('/test', (req, res) => { 
  res.json({ message: 'user routes are working!' });
});



/* ----- routes ----- */
router.use('/api/users', userRoutes);



module.exports = router;

