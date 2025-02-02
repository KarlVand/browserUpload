const express = require('express');
const router = express.Router();
const userRoutes = require('./users');

router.use('/users', userRoutes);

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

function asyncHandler(cb) {
    return async (req, res, next) => {
      try {
        await cb(req, res, next);
      } catch (error) {
        // Forward error to the global error handler
        next(error);
      }
    };
  }


router.post('/register', asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.json({ message: 'User created successfully', userId: user.id });
}));

module.exports = router;

