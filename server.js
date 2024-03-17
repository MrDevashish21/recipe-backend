// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('./db.sqlite');

// Define API endpoints
app.get('/api/recipes', (req, res) => {
  db.all('SELECT * FROM Recipe', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});