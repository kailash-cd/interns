var express = require("express");
const path = require("path");
const test = require("./src/server/route/test");
const http = require("http");
const fs = require("fs");
const cors = require('cors'); 

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routeHandler = require("./src/server/route/test")

app.use(cors({
    origin: 'http://localhost:4200', // Replace with your Angular app's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable sending cookies and other credentials
  }));

app.post("/api/test", (req, res)=>{
  routeHandler().handelloginservice(req, res);
});
const port = 4000;
app.post("/api/local",(req,res)=>{
  console.log(" the result is : ");
    res.send("hii rahul");
})
app.listen(port, () => {
  console.log("server open on port : ", port);
});