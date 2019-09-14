const express = require("express");
const router = express.Router();
const mongo = require("../DB/addDonor")

const mongoAddDonor = require("../DB/addDonor")

//write your code here 

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

router.post("/add", (req, res) => {
    // console.log("req.body", req.body);
    mongo.addDoner(req.body, result => {
        // console.log("result", result);
        res.json(result);
    });
});

//other solution
router.post('/:firstName/:lastName/:phone/:country/:state/:bloodType/:email/:birthday', (req, res) => {
    // console.log("Rawabi server")
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;
    let phone = req.params.phone;
    let country = req.params.country;
    let state = req.params.state;
    let bloodType = req.params.bloodType;
    let email = req.params.email;
    let birthday = req.params.birthday;

    mongoAddDonor.newDonor(firstName, lastName, phone, country, state, bloodType, email, birthday, (result) => {
        res.json(result);
    })
});

module.exports = router;