const express = require("express");
const router = express.Router();
const userService = require("../services/UserService");

// POST /users
router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /users/:userId
router.get("/:userId", async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// PUT /users/:userId
router.put("/:userId", async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:userId
router.delete("/:userId", async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// GET /users
router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
