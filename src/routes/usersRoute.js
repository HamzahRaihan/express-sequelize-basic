const express = require('express');
const { getAllUser, getUserById, register } = require('../controllers/userController');
const route = express.Router();

route.get('/', getAllUser);
route.get('/:id', getUserById);
route.post('/', register);
route.put('/:');
module.exports = route;
