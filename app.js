const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

let ideas = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/ideas', (req, res) => {
  ideas.push(req.body);
  res.send("Idea added");
});

app.get('/ideas', (req, res) => {
  res.json(ideas);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
