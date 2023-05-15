const UserModel = require("../models/UserModel");

exports.getAllUsers = async () => {
  return await UserModel.find();
};

exports.createUser = async (userData) => {
  return await UserModel.create(userData);
};

exports.getUserById = async (id) => {
  return await UserModel.findById(id);
};

exports.updateUser = async (id, userData) => {
  return await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};
