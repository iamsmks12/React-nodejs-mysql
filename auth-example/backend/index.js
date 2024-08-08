const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://subhamitaCg:Subhamita@mongo-test-cluster.0hqahwc.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-Test-Cluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
