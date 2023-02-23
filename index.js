const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Docker</h1>");
});

app.listen(port, () => console.log(`listening to ${port}`));
