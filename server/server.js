// server/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // To use environment variables

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows server to accept JSON data in requests

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/erp_system';
mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Serve the frontend files
// This tells Express to use your 'client' folder for static files
app.use(express.static(path.join(__dirname, '..', 'client')));

// Basic API route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Define Routes
app.use('/api/faculty', require('./routes/faculty'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/academics', require('./routes/academics'));

// All other GET requests not handled will return the frontend's index.html
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ message: 'API endpoint not found' });
  }
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});