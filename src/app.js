require('dotenv/config');

const express = require('express');
const sequelize = require('./config/db');
const app = express();

const router = require('./routes');

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log('server is running in port ' + 3000);
});
