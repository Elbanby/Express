const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Oh you want to 'Get' me! ;) ");
});

app.post("/", (req, res) => {
  res.end("plz don't 'Post' this!");
});

app.put("/", (req, res) => {
  res.end("I can't 'Put' it away!");
});

app.delete("/", (req, res) => {
  res.end("Plz 'Delete' my phone number!");
});

app.listen(3000,_ => console.log("Listing on port 3000"));
