const express = require("express");
const router = express.Router();
const mongo = require("../DB/report");


//write your code here

router.get("/test", (req, res) => {
  mongo.readData(result => {
    res.json(result);
  });
});
router.put("/", (req, res) => {
  mongo.updateDonor(req.body, result => {
    res.json(result);
  });
});
router.get("/count", (req, res) => {
  mongo.countDonors(result => {
    res.json(result);
  });
})



module.exports = router;
