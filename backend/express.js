const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/login-page/login.html'));
  });

  app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/dashboard/dashboard.html'));
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})