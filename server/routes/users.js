const express = require('express');
const router = express.Router();
let { registerUser, loginUser } = require('../controllers/userController');



router.get('/register', (req, res) => { 
    res.json({ message: 'register routes are working!' });
  });

router.post('/register', registerUser);
router.post('/login', loginUser);

  
module.exports = router;


    

