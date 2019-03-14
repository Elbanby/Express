const http = require("http");
const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("I've got a  request on URL: " + req.url);
  next();
});

app.use((req, res) => {
  console.log("I've got a  request on URL: " + req.url);
  res.end("hi");
});

http.createServer(app).listen(3000);
