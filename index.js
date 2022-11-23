const express = require("express");
const app = express();
const port = 80;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`Hello!`);
});

app.get("/meet", (req, res) => {
  res.writeHead(301, {
    Location: `https://meet.google.com/otj-iqxh-prj`
  }).end();
});

module.exports = app;