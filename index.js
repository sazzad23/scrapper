//console.log(`Server running on http://localhost:3000`);
//setInterval(() => {
   //console.log("Hello, this message appears every 5 seconds!");
   //return 'sazzad';
//}, 5000);

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

