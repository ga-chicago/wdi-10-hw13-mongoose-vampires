// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires.js')
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampires', { useMongoClient: true })
// 4. Open your mongoose connection
mongoose.connection.once('open', () => {
	console.log('Connected to Mongo')
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
// // Add the given data
// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

Vampire.create({
	name: 'Angus',
  	hair_color: 'orange',
  	eye_color: 'blue',
  	dob: 'July 4, 1776 3:45:00',
  	loves: ['america', 'bald eagles', 'spandex'],
  	location: 'New York, New York, US',
  	gender: 'm',
  	victims: 242
  	}, (err, article) => {
		// tell the user if it worked or it didn't
		if(err) {
			console.log(err)
		} else {
			console.log(article)
		}
		// this closes our db connectino so that the program will end
		mongoose.connection.close();
})
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////