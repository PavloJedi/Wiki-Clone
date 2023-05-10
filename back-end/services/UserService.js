const User = require("../models/UserModel");

async function createUser(userData) {
  const user = new User(userData);
  await user.save();
  return user;
}

async function getUserById(userId) {
  const user = await User.findById(userId);
  return user;
}

async function updateUser(userId, userData) {
  const user = await User.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  return user;
}

async function deleteUser(userId) {
  const user = await User.findByIdAndDelete(userId);
  return user;
}

async function getAllUsers() {
  const users = await User.find();
  return users;
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
