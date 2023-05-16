const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../models/UserModel");

// Configure local strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user || !user.comparePassword(password)) {
          return done(null, false, { message: "Invalid email or password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

exports.registerUser = async (userData) => {
  const { name, email, password } = userData;
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  const newUser = await UserModel.create({
    name,
    email,
    password: hash,
  });
  return newUser;
};

exports.authenticateUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ user });
    });
  })(req, res, next);
};

exports.getCurrentUser = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) throw new Error("User not found");
  return user;
};
