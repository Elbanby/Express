const http = require("http");
const path = require("path");
const express = require("express");

const api = require("./api");

const app = express();

app.use((req, res, next) => {
  console.log("API router recieved a res from " + req.ip);
  next();
});

app.get("/api", api)

app.use((req,res) => {
  res.end("Okay we are in app");
});

http.createServer(app).listen(3000, _ => console.log("3000 up^ "));
