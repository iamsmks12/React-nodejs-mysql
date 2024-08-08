const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./user');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const user = new User({ username, password: hashedPassword });
  try {
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  // Create JWT token
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '30s' });
  res.json({ token, user });
});

module.exports = router;
