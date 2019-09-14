const db = require("../database");
let Donor = db.Donor;

//write your code here

// let readData = (newSearch, cb) => {
//   console.log('newSearch', newSearch)
//   Donor.find(newSearch, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       // console.log('data:', data);
//       cb(data);
//     }
//   });
// };

let deleteDoner = (donor, cb) => {
  // console.log('donorbefoooooooooooooooooooooooooooooor', donor)
  Donor.findByIdAndDelete(donor._id, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb("done");
    }
  });
};

module.exports = {
  deleteDoner
};
