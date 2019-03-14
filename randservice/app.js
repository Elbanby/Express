const path = require("path");
const express = require("express");

const app = express();

// Logging middle ware
app.use((req, res, next) => {
  console.log("Ip " + req.ip + " visited " + req.url);
  next();
});

app.get("/random/:min/:max",(req, res) => {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);
  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({err : "Bad request."});
    return;
  }
  const result = Math.round((Math.random() * (max - min)) + min);
  res.json({result});
});

app.listen(3000, _ => console.log("Listenning on port 3000"));
