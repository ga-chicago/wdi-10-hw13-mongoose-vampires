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
/////////////////////////////////////////////////
// ### Select by comparison

// Find all the vampires that that are females
// Vampire.find({
// 		gender: 'f'
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have greater than 500 victims
// Vampire.find({
// 		victims: { $gt: 500}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have fewer than or equal to 150 victims
// Vampire.find({
// 		victims: { $lte: 150}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have a victim count is not equal to 210234
// Vampire.find({
// 		victims: { $ne: 210234}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have greater than 150 AND fewer than 500 victims
// Vampire.find({
// 		$and: [{victims: {$gt: 150}}, {victims: {$lt: 500}}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
// Vampire.find({
// 		title: { $exists: true }
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// do not have a victims property
// Vampire.find({
// 		victims: { $exists: false }
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have a title AND no victims
// Vampire.find({
// 		$and: [{title: {$exists: true}}, {victims: {$exists: false}} ]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have victims AND the victims they have are greater than 1000
// Vampire.find({
// 		$and: [{victims: {$exists: true} }, {victims: {$gt: 1000}}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
// 		$or: [{location: 'New York, New York, US' }, {location: 'New Orleans, Louisiana, US'}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// love brooding or being tragic
// Vampire.find({
// 		loves: {$in: ['brooding', 'being tragic']}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have more than 1000 victims or love marshmallows
// Vampire.find({
// 		$or: [{victims: {$gt: 1000}}, {loves: {$in: ['marshmallows']}}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have red hair or green eyes
// Vampire.find({
// 		$or: [{hair_color: 'red'}, {eye_color: 'green'}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

/////////////////////////////////////////////////
//### Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find({
// 		loves: {$in: ['frilly shirtsleeves', 'frilly collars']}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// love brooding
// Vampire.find({
// 		loves: {$in: ['brooding']}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({
// 		loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({
// 	$and: [{loves: {$in: ['fancy cloaks']}}, {loves: {$nin: ['top hats', 'virgin blood']}}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

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