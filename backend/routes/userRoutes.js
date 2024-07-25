const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route for user registration
router.post('/register', async (req, res) => {
	console.log ('Inside register route');
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
	console.log ('Inside login route');
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
