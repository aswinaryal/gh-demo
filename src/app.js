const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'Ok' });
});

module.exports = app;
