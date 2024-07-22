const express = require('express');
const cors = require('cors');
//const mysql = require('mysql2');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const uri = "mongodb+srv://subhamitaCg:Subhamita@mongo-test-cluster.0hqahwc.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-Test-Cluster";

// For data transfer between React and Node
app.use(cors());

/* Create connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '8208455883',
    database: 'react_mysql_example'
}); */

// Create a MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes
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
}); */

// Routes
app.post('/addUser', async (req, res) => {
    const { name, email } = req.body;

    // MongoDB Connection
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db('mongo_database'); // Replace with your database name
        const collection = db.collection('userEmail'); // Replace with your collection name

        // Insert into MongoDB
        const result = await collection.insertOne({ name, email });
//        return res.status(201).send(result);
          return res.status(200).json({ message: 'User added successfully!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.errorResponse.errmsg });
    } finally {
        await client.close();
    }
});

app.get('/addUser', async (req, res) => {
	console.log(`Invoked the get function`);
    const { name, email } = req.body;
	const client = new MongoClient(uri);
    
	try {      
        await client.connect();
        const db = client.db('mongo_database'); // Replace with your database name
        const collection = db.collection('userEmail'); // Replace with your collection name

        // Insert into MongoDB
		console.log(`Before find call`);
        const findResult = await collection.find({}).toArray(function(err, docs) {
			if (err) throw err;
			console.log(docs); // Here are your documents
			// Process the documents
        );
		return res.status(200);
		});
	}
	catch (err) {
		console.log(`Inside error catch`);
		console.error(err);
		return res.status(500).json({ message: err });
	}
	finally {
		console.log(`Closing connection`);
		await client.close();
	}
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});