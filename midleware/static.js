const http = require("http");
const path = require("path");
const express = require("express");

const app = express();
// Path to the folder to be exposed
const PUBLIC = path.resolve(".", "public");

app.use((req, res, next) => {
  console.log("Request came in from ip " + req.ip);
  next();
});

// If path exist in public, express.static will serve it, otherwise it'll forward to next middleware
app.use(express.static(PUBLIC));

app.use((req, res, next) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Can't seem to find a webpage!");
});

http.createServer(app).listen(3000, () => console.log("Listining on port 3000"));
