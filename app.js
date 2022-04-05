const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');

// LOAD MIDDLEWARE
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* CORS HEADERS MIDDLEWARE */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* LOAD DATABASE */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'julius_db',
  password : 'julius1234'
});

/* READ ALL */
app.get('/', (req, res) => {
  connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM test", function (err, result, fields) {
          if (err) throw err;
        });
      });
      connection.end();
});

/* CREATE NEW FORMULAR */
app.post('/', (req, res) => {
});

/* LISTEN */
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});