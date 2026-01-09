/** @format */

var express = require("express");
var path = require("path");
var cors = require("cors");

var app = express(cors);

const port = 3001;

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.static("./dist/"));
app.use("/static", express.static(path.join(__dirname, "dist")));

app.get("./", cors(corsOptions), function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/photos", cors(corsOptions), (req, res) => {
  console.log("Loading...");
  setTimeout(() => {
    res.sendFile(path.join(__dirname + "/dist/json/photos.json"));
  }, 3000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
