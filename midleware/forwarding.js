const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request came in from ip " + req.ip);
  next();
});

app.use((req, res, next) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hi! thanks for visiting my server!");
});

http.createServer(app).listen(3000, () => console.log("Listining on port 3000"));
