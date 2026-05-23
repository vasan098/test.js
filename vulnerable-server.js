const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('users.db');
const JWT_SECRET = 'super-secret-prod-key';

app.get('/user', (req, res) => {
  const id = req.query.id;
  const sql = 'SELECT * FROM users WHERE id = ' + id;
  db.all(sql, (err, rows) => {
    if (err) throw err;
    res.send('<h1>' + rows[0].name + '</h1>');
  });
});

app.listen(3000);
