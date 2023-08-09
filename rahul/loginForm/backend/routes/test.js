var express = require("express");
var router = express.Router();
const axios = require("axios");
router.get("/testing", (req, res) => {
  res.send({ message: "ok" });
});
router.post("/dataSend", (req, res) => {
  console.log(req.body);

  const dataToSend = {
    username: req.body.username,
    password: req.body.password,
    appname: "GeoAd",
  };

  const headersToSend = {
    appname: "geoAd",
  };
  const apiUrl = "http://54.225.122.8:7000/bh/login/v1";
  // const apiUrl='http://geostage.chalkitup.live:5502/auth/signin'
  axios
    .post(apiUrl, dataToSend, { headers: headersToSend })

    .then((response) => {
      res.send({ message: response.data });
    })
    .catch((error) => {
      console.error("Error calling the other API:", error);
      res
        .status(500)
        .send({ message: "An error occurred while calling the other API." });
    });
});

module.exports = router;
