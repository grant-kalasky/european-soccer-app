const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express(); /* Initialize Express */ 

/* Creates connection to MySQL database */
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5fu233ea',
  database: 'soccer_db'
})

connection.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(connection);
  }
});

app.use(cors());

const SELECT_ALL_TEAMS_QUERY = 'SELECT * FROM Team';

// app.get('/teams', (req, res) => {
//   connection.query(SELECT_ALL_TEAMS_QUERY, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json({ data: results });
//     }
//   });
// });

// require('./routes/html-router')(app, connection);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
