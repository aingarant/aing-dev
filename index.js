const express = require("express");
const app = express();
const port = 80;

const simpliiUrl = "https://mbsy.co/6s7JD2";

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`Hello.`);
});

app.get("/meet", (req, res) => {
  res.writeHead(301, {
    Location: `https://meet.google.com/zho-qggt-eqz`
  }).end();
});

app.get("/r/simplii", (req, res) => {
  res.writeHead(301, {
    Location: simpliiUrl
  }).end();
});

module.exports = app;