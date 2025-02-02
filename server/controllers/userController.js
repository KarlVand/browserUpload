const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/user');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else if (user.password !== password) {
        res.status(401).json({ message: 'Incorrect password' });
    } else {
        res.status(200).json(user);
    }
});

module.exports = { registerUser, loginUser };