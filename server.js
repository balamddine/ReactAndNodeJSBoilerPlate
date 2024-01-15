const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(
  cors(),  
);

app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.static(path.join("build")));

const port = 8080; // prod port
app.get("/", (req, res) => {
  res.send("<h2>This is the URL that is configured for your application link in Jira</h2>");
});
// Open Connection

var server = app.listen(port, () => {
  console.log("listening ... 🚀 ");
  console.log(`Server listening on the port::${port}`);
});
