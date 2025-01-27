
/* ----- La base pour tous ----- */
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const routes = require('./routes/index');

/* ----- Import Models ----- */
const defineUserModel = require('./models/userModel');

/* ----- Import Routes ----- */
const createUserRoutes = require('./routes/userRoutes');

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
const User = defineUserModel(sequelize);
const userRoutes = createUserRoutes(User);

app.use('/api/users', userRoutes);

// Sync database
sequelize.sync()
.then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch(err => console.error('Error syncing database:', err));

// Use routes
app.use('/api', routes);  // All routes will be prefixed with /api

// Registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.create({ username, password });
        res.json({ message: 'User created successfully', userId: user.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'This is the root path!' });
}); 

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});