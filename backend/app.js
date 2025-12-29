const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fooddb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

app.get('/api/menu', (req, res) => {
  db.query('SELECT * FROM menu', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
