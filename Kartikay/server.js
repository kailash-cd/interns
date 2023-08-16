require("dotenv").config();
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
app.use(express.json());
app.set("view engine", "html");
require("./server/route")(app);
app.engine(".html", require("ejs").__express);
app.use(express.static(path.join(__dirname, "./dist/geoad")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/geoad"));
});
var server = http.createServer(app).listen(4000, function() {
  console.log("Express server listening on port:" + server.address().port);
});
