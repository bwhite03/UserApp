const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  });
}

// Create Connection
const db = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b212718faef918",
  password: "a8a7ce29",
  database: "heroku_fb56f2ac7737319"
});

// Connect
db.connect(err => {
  if (err) throw err;
  console.log("MySql Connected...");
});

// Selecting users
app.get("/api/users", (req, res) => {
  let sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Select single user
app.get("/api/user/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Posting users
app.post("/post", (req, res) => {
  const name = req.body.user.name;
  const email = req.body.user.email;
  const sql = "INSERT INTO users(name, email) VALUES (?, ?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
  });
  res.end();
});

// Update users
app.post("/api/update/:id", (req, res) => {
  const names = req.body.user.name;
  const emails = req.body.user.email;

  let sql = `UPDATE users SET name = ?, email = ? WHERE id = ${req.params.id}`;

  db.query(sql, [names, emails], (err, result) => {
    if (err) throw err;
  });
});

// Deleting users
app.delete("/delete/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
  });
  res.end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
