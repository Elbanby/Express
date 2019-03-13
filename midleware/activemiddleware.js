const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request came in from ip " + req.ip);
  next();
});

app.use((req, res, next) => {
  const date = new Date();
  const minute = date.getMinutes();
  if (minute % 2 === 0) {
    next();
    return;
  }
  res.statusCode = 403;
  res.end("Not authorized.");
});


app.use((req, res, next) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("secret message");
});

http.createServer(app).listen(3000, () => console.log("Listining on port 3000"));
