const http = require("http");
const path = require("path");
const express = require("express");

// Create express app
const app = express();
const PATH = path.resolve("..", "public");
console.log(PATH);
// Log middle ware
app.use((req, res, next) => {
  console.log("Recived a reuest from " + req.ip + " requesting " + req.url);
  next();
});


app.use(express.static(PATH));

app.use((req, res) => {
  res.StatusCode = 404;
  res.end("404");
});



http.createServer(app).listen(3000, _ => console.log("Listening on port 3000"))
