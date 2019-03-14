const http = require("http");
const express = require("express");

// Create express app
const app = express();

// Log middle ware
app.use((req, res, next) => {
  console.log("Recived a reuest from " + req.ip + " requesting " + req.url);
  next();
});

// Assuming an error happens in that middle ware
app.use((res, req, next) => {
  console.log("I throw an erro");
  next(new Error("Shit happens and you must handle it"));
});

//Since an error was thrown this midle ware will be skipped
app.use((req, res) => {
  res.StatusCode = 404;
  res.end("404");
});

// error handler midleware
app.use((err, req, res, next) => {
  res.end("Bad request");
});


http.createServer(app).listen(3000, _ => console.log("Listening on port 3000"))
