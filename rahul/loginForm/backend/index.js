var express = require("express");
const path = require("path");
const test = require("./routes/test");
const http = require("http");
const fs = require("fs");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "frontend", "index.html"),
    (err) => {}
  );
});
app.use("/api/test", test);
const port = 4000;

app.listen(port, () => {
  console.log("server open on port : ", port);
});
