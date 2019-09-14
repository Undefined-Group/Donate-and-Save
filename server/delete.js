const express = require("express");
const router = express.Router();
const mongo = require("../DB/delete");

//write your code here

router.get("/test", (req, res) => {
  mongo.readData(result => {
    res.json(result);
  });
});

// router.delete('/delete' , (req,res)=>{
//     console.log('object server', req.body)
//     mongo.deleteDoner(req.body,(result)=>{
//         res.json(result)
//     })
// })
router.put("/delete", (req, res) => {
  let deleteItms = req.body;
  mongo.deleteDoner(deleteItms, result => {
    // console.log('result', result)
    res.json(result);
  });
});

module.exports = router;
