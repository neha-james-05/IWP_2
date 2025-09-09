// server/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // To use environment variables

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows server to accept JSON data in requests

// Serve the frontend files
// This tells Express to use your 'public' folder for static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Basic API route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// All other GET requests not handled will return the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


// Define the port
const PORT = process.env.PORT || 5000;
// Define Routes
app.use('/api/faculty', require('./routes/faculty'));
// Add this line in server.js
app.use('/api/auth', require('./server/routes/auth.js'));
// You will add more routes here for auth, attendance, etc.
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});