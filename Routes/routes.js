const express = require("express");
const router = express.Router();
const db = require("../database/connection");

// Selecting users
router.get("/api/users", (req, res) => {
  let sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Select single user
router.get("/api/user/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Posting users
router.post("/post", (req, res) => {
  const name = req.body.user.name;
  const email = req.body.user.email;
  const sql = "INSERT INTO users(name, email) VALUES (?, ?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
  });
  res.end();
});

// Update users
router.post("/api/update/:id", (req, res) => {
  const names = req.body.user.name;
  const emails = req.body.user.email;

  let sql = `UPDATE users SET name = ?, email = ? WHERE id = ${req.params.id}`;

  db.query(sql, [names, emails], (err, result) => {
    if (err) throw err;
  });
  res.end();
});

// Deleting users
router.delete("/delete/:id", (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
  });
  res.end();
});

module.exports = router;
