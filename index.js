const express = require('express');

const app = express();
const port = 80; // You can change this to the desired port number

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
