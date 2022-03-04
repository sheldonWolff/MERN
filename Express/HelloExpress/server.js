const express = require("express");
const app = express();
const port = 8000;
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("You can run, but you can't hide, bitch.");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
