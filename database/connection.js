const mysql = require("mysql");

// Create Connection
const db = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b212718faef918",
  password: "a8a7ce29",
  database: "heroku_fb56f2ac7737319"
});

// Connect
db.getConnection(err => {
  if (err) throw err;
  console.log("MySql Connected...");
});

module.exports = db;
