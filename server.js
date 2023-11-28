  // Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const gameRoutes = require('./routes/games'); // Adjust the path as necessary
const reviewRoutes = require('./routes/reviews'); // Adjust the path as necessary

// Initialize express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://donovangibson89:videogamereviews89@gamereviews.d53q4id.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Use routes
app.use('/api/games', gameRoutes);
app.use('/test/reviews', reviewRoutes);

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Video Game Review Aggregator API!');
});

// Set the port
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
