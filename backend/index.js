// packages needed
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

// routes
const starRouter = require("./star");

// middleware logs in console
app.use((req, res, next) => {
  console.log(`Time: ${Date.now()} - ${req.method}: ${req.originalUrl}`);
  next();
});

// routing middleware
app.use("/star", starRouter, cors());

// app listening
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
