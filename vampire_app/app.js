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
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData, (err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data
// Vampire.create({
// 	name: 'Angus',
//   	hair_color: 'orange',
//   	eye_color: 'blue',
//   	dob: 'July 4, 1776 3:45:00',
//   	loves: ['america', 'bald eagles', 'spandex'],
//   	location: 'New York, New York, US',
//   	gender: 'm',
//   	victims: 242
//   	}, (err, vampire) => {
// 		// tell the user if it worked or it didn't
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			console.log(vampire)
// 		}
// 		// this closes our db connection so that the program will end
// 		mongoose.connection.close();
// })

// // lady1:
// { _id: 5a5a70e3049223091130df89,
//     name: 'Maeve',
//     eye_color: 'red',
//     dob: 0500-01-01T18:00:00.000Z,
//     location: 'Washington DC, US',
//     gender: 'f',
//     victims: 1000,
//     __v: 0,
//     loves: [ 'cowboys', 'rain', 'coffee' ],
//     hair_color: 'silver' },

// lady2:
// { _id: 5a5a6e849f2f6109021cc602,
//     name: 'Frankie',
//     eye_color: 'purple',
//     dob: 1900-12-25T06:00:00.000Z,
//     location: 'St. Louis, Missouri, US',
//     gender: 'f',
//     victims: 25,
//     __v: 0,
//     loves: [],
//     hair_color: 'black' }
/////////////////////////////////////////////////
// ## QUERYING
// Vampire.find({
// 		gender: 'f'
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		victims: { $gt: 500}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		victims: { $lte: 150}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		victims: { $ne: 210234}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		title: { $exists: true }
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		victims: { $exists: false }
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.find({
// 		$and: [{title: {$exists: true}}, {victims: {$exists: false}} ]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

Vampire.find({
		$and: [{victims: {$exists: true} }, {victims: {$gt: 1000}}]
	}, (err, vampire) => {
		console.log(vampire);
		mongoose.connection.close();
	})
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