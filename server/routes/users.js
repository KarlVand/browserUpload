const express = require('express');
const router = express.Router();
let { registerUser } = require('../controllers/userController');

router.post('/register', registerUser);


module.exports = router;


    

