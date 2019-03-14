const http = require("http");
const path = require("path");
const express = require("express");

const api = express.Router();

api.use((req, res, next) => {
  console.log("API router recieved a res from " + req.ip);
  next();
});

api.use((req, res) => {
  res.end("here is api info");
});

module.exports = api;
