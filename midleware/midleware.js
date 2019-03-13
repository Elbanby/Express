const http = require("http");
const express = require("express");

const app = express();

// Middleware
app.use((req, res) => {
  console.log("I've got a  request on URL: " + req.url);
  res.end("this url says hi");
});

http.createServer(app).listen(3000);
