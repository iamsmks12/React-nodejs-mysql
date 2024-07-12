const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// For data transfer between React and Node
app.use(cors());

// Create connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '8208455883',
    database: 'react_mysql_example'
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/addUser', (req, res) => {
    const { name, email } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO users (name, email) VALUES (?, ?)`;
    pool.query(INSERT_USER_QUERY, [name, email], (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        return res.status(200).json({ message: 'User added successfully!' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
