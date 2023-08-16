module.exports = function (app) {
  console.log("welcome to routes");
  const axios = require("axios");

  app.post("/api/user/login", (req, res) => {
    const body = req.body;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    axios
      .post('http://54.225.122.8:7000/bh/login/v1', body)
      .then((response) => {
        console.log("Response:", response.data.status);
        if (response.data.status===0){
          res.json(response.data);
        }
        else{
          res.json({
            status:-1,
            message:'Internal Server Error'
          })
        }
     
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    });
};