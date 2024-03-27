const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let latestDistance = null 

app.get('/', (req, res) => {
  res.send('Hello from your Node.js server!');
});

app.get('/distance', (req, res) => {
  res.json({ distance: latestDistance });
});

app.post('/data', (req, res) => {
  const distance = req.body.distance;  
  console.log('Received distance:', distance);
  latestDistance = distance
  // Process the distance data as needed
  res.sendStatus(200); // Send a response back to the ESP32
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
