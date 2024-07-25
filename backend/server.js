const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://subhamitaCg:Subhamita@mongo-test-cluster.0hqahwc.mongodb.net/mongo_database?retryWrites=true&w=majority&appName=Mongo-Test-Cluster'; // Replace with your MongoDB URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(bodyParser.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  username: String,
  password: String,
});
const User = mongoose.model('user', userSchema);

// Route for user registration
app.post('/register', async (req, res) => {
	console.log ('Inside register route');
	console.log (req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route for user login
app.post('/login', async (req, res) => {
	console.log ('Inside login route');
	console.log (req.body);
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
