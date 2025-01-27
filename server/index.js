const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SQLite connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Define User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sync database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database:', err));

// Use routes
app.use('/api', routes);  // All routes will be prefixed with /api

// Registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        res.json({ message: 'User created successfully', userId: user.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/* --------------------------------- */






const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});