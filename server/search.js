const express = require("express");
const router = express.Router();
const mongo = require("../DB/search");

//write your code here

router.get("/test", (req, res) => {
  mongo.readData(result => {
    // console.log("result", result);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  let sData = req.body;
  // console.log("req.body", req.body);
  mongo.readData(sData, result => {
    // console.log("resulttttttttttttttttt", result);
    res.json(result);
  });
});

module.exports = router;
