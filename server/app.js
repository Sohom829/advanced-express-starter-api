const express = require("express");
const app = express();
const router = require("./routers/main.route");
const jsonRouter = require("./routers/json.route");

// Use the route from the router provided.
app.use("/", router);

app.use("/json", express.json(), jsonRouter);

module.exports = app;
