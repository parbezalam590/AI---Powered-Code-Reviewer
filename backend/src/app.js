const express = require('express'); // Import Express
const aiRoutes = require('./routes/ai.routes'); // Import AI routes
const cors = require('cors'); // Import CORS middleware

const app = express() // Initialize Express

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => { // Simple route for testing
    res.send('Hello World!');
});

app.use('/ai' , aiRoutes); // Use AI routes with /ai prefix 
module.exports = app; // Export the app for use in server.js