const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'Ok' });
});

app.get('/api/v1/login', (req, res) => {
  res.json({ message: 'api is in progress' });
});

module.exports = app;
