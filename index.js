const express = require("express");
const app = express();
const port = 9040;

app.get("/", (req, res) => {
  res.send("Hello add dockerdd!w"); //das
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
