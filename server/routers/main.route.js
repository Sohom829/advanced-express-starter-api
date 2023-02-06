const express = require("express");
const router = express.Router();

// Simple routing
router.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Query param
router.get("/query", (req, res) => {
  // Get msg param from the query
  const message = req.query.msg;
  if (!message) {
    // If the msg param is unavailable redirect to the msg param
    return res.redirect("/query?msg=Hello+World");
  }
  // Send the message
  res.send(`${message}`);
});

module.exports = router;
