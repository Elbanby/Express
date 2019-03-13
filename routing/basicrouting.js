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

// Routing
app.get("/", (req, res) => {
  res.end("Home page");
});

app.get("/about", (req, res) => {
  res.redirect("https://github.com/elbanby");
});

app.get("/expose", (req, res) => {
  res.sendFile("basicrouting.js",{ root: __dirname });
});

app.get("/sound", (req, res) => {
  res.sendFile("squeeze.mp3",{ root: __dirname });
});

app.use((req, res, next) => {
  res.statusCode = 404;
  res.end("404!");
});

http.createServer(app).listen(3000, () => console.log("Listining on port 3000"));
