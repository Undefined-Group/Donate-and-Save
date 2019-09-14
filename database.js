const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BloodDonate', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://naaman:tBZNfUHaMrj8JWAM@cluster0-xcjyv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let donorSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  bloodType: String,
  country: String,
  state: String,
  birthday: Date,
  dateOfPublish: { type: Date, default: Date.now },
  reports: Array,
  numberOfCalls: { type: Number, default: 0 }
});

let Donor = mongoose.model('donor', donorSchema);



module.exports = {
  Donor
}



