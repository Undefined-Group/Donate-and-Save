const db = require("../database")
let Donor = db.Donor

//write your code here 

let readData = (cb) => {
    Donor.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}
//other solution
let newDonor = (firstName, lastName, phone, country, state, bloodType, email, birthday, cb) => {
    Donor.create({
        firstName: firstName, lastName: lastName,
        phone: phone, country: country, state: state, bloodType: bloodType,
        email: email, birthday: birthday
    }, (err, data) => {

        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}

let addDoner = (doner, cb) => {
    Donor.create(doner, (err, data) => {

        if (err) {
            cb(err)
        } else {
            readData(cb)
        }
    })
}

module.exports = {
    readData,
    newDonor,
    addDoner
}