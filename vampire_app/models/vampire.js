// require mongoose
const mongoose = require('mongoose');

// create the schema
const vampireSchema = new mongoose.Schema({
	name: {type: String, required: true},
  	hair_color: String,
  	eye_color: String,
  	dob: new Date(year, month, day, hour, minute),
  	loves: [String],
  	location: String,
  	gender: String,
  	victims: {type: Number, min: 0}
});

// create the model
const Vampire = mongoose.model('Vampire', vampireSchema);

// export the model
module.exports = Vampire;
