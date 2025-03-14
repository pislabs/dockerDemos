const express = require("express");
const ip = require("ip");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ip", (req, res) => {
  res.send("Hello World! @" + ip.address());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
