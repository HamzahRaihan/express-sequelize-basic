const express = require('express');

const { getAllUser, getUserById, register, login } = require('../controllers/userController');
const auth = require('../middleware/auth');
const route = express.Router();

route.get('/', auth, getAllUser);
route.get('/:id', getUserById);
route.post('/', register);
route.post('/login', login);
// route.put('/:id');
module.exports = route;
