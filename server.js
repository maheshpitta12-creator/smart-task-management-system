const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  tasks.push(req.body.task);
  res.json({ message: 'Task Added Successfully' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
