require("dotenv").config();
const session = require("express-session");

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
};

const sessionMiddleware = session(sessionConfig);

module.exports = sessionMiddleware;
