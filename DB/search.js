const db = require("../database")
let Donor = db.Donor

//write your code here 

let readData = (sData, cb) => {
    // console.log('sData in mongo', sData)
    Donor.find(sData).sort({ dateOfPublish: -1 }).exec((err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

module.exports = {
    readData
}