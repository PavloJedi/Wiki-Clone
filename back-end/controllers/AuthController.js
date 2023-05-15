const AuthService = require("../services/AuthService");

exports.registerUser = async (req, res, next) => {
  try {
    const newUser = await AuthService.registerUser(req.body);
    return res.status(201).json({ user: newUser });
  } catch (error) {
    return next(error);
  }
};

exports.loginUser = (req, res, next) => {
  AuthService.authenticateUser(req, res, next);
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await AuthService.getCurrentUser(req.user.id);
    return res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};
