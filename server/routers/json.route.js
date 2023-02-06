/**
 * @author Sohom829
 */

const express = require("express");
const router = express.Router();

// Simple JSON Response
router.get("/", (req, res) => {
  res.json({
    message: `Hello, world`,
  });
});

// JSON with Multi Object
router.get("/multi-obj", (req, res) => {
  res.json({
    message: {
      content: `Hello, world!`,
      status: res.statusCode,
    },
  });
});

// Send Array in JSON
router.get("/array", (req, res) => {
  let content = "Hello, world!";
  let Status = res.statusCode;
  res.json({
    array: [content, Status],
  });
});

// Query param and response.

router.get("/query", (req, res) => {
  const message = req.query.msg;
  if (!message) {
    return res.redirect("/json/query?msg=Hello,+World!");
  }
  res.json({
    message: message,
  });
});

module.exports = router;
