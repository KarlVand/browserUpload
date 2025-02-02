const express = require('express');
const path = require('path');
const cors = require('cors');
const Sequelize = require('sequelize');
const dbConfig = require('./config/database');
const routes = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());

const env = process.env.NODE_ENV || 'development';
let sequelize;

const dbPath = path.join(__dirname, '..', 'database.sqlite');
sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false
});
    


app.use('/api', routes); 
app.get('/', (req, res) => {
    res.json({ message: 'This is the root path!' });
}); 

const PORT = process.env.PORT || 5000;
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error syncing database:', err));

module.exports = sequelize;