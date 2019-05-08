const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express(); /* Initialize Express */ 

// var teams = require('./routes/teams');

/* Creates connection to MySQL database */
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '5fu233ea',
  port: "3306",
  database: 'soccer_db'
})

app.use(cors());

// app.use('/teams', teams);

// connection.connect(function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(connection);
//   }
// });


// const COLUMNS = [
//   'team_long_name', 
//   'team_short_name'
// ];

// app.get('/api/teams', (req, res) => {
//   const searchParam = req.query.q;

//   if(!searchParam) {
//     res.json({
//       error: "Missing required parameter `q`"
//     });
//     return;
//   }

//   let teamQuery = '';
//   if (searchParam == "*") {
//     teamQuery = 'SELECT * FROM Team';
//   } else {
//     teamQuery = `SELECT * FROM Team WHERE team_long_name like '%${searchParam}%'`;
//   }

//   connection.query(teamQuery, (err, rows, fields) => {
//     // if (err) {
//     //   return res.send(err);
//     // } else {
//     //   return res.json({ data: results });
//     // }
//     if (err) { return res.send(err); }
//     res.send(results);
//     // if (rows.length > 0) {
//     //   res.json(
//     //     rows.map((entry) => {
//     //       const e = {};
//     //       COLUMNS.forEach((c) => {
//     //         e[c] = entry[c];
//     //       });
//     //       return e;
//     //     })
//     //   );
//     // } else {
//     //   res.json([]);
//     // }
//   });
// });

require('./routes/teams')(app, connection);
require('./routes/players')(app, connection);
require('./routes/home')(app, connection);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
