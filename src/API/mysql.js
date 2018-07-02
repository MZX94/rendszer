const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dr89jbQ1.munkIT',
    database: 'adatbazis'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/query', async (req, res)=>{
    connection.connect();

    connection.query('show databases', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3001, () => {
 console.log('Server started on port 3001');
});