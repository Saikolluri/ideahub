const express = require('express');
const app = express();

app.use(express.json());

let ideas = [];

app.get('/', (req, res) => {
  res.send("IdeaHub is running 🚀");
});

app.post('/ideas', (req, res) => {
  ideas.push(req.body);
  res.send("Idea added successfully");
});

app.get('/ideas', (req, res) => {
  res.json(ideas);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

