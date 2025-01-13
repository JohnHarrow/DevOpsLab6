const express = require('express');
const cors = require('cors');  // Import the CORS package
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
];

app.use(cors()); // Enable CORS for all routes

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});