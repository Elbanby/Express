const http = require("http");
const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.resolve(__dirname, ""));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index", {
    message: "Hey everyone! This is my webpage."
  });
});

http.createServer(app).listen(3000, () => console.log("Listining on port 3000"));
