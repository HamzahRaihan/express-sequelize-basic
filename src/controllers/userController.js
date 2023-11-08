const { User } = require('../models');

const getAllUser = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json({
    message: 'succeed',
    data: allUsers,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const getUser = await User.findOne({ where: { id: id } });
  res.status(200).json({
    message: 'succeed',
    data: getUser,
  });
};

const register = async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const addUser = await User.create(newUser);

  res.status(201).json({
    message: 'account succesfully registered',
    data: addUser,
  });
};

module.exports = { getAllUser, getUserById, register };
