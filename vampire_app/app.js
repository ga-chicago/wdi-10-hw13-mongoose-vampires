// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires.js')

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampires', {
	useMongoClient: true
});

mongoose.connection.once('open', (req, res) => {
	console.log('db connection open');
})

// 4. Open your mongoose connection
db.on('error', () => {
	console.error('there was an error connecting to the db');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

db.once('open', () => {
	console.log('connected to tha db');

// 	Vampire.collection.insertMany(vampireData,(err, data) => {
//     	console.log("added provided vampire data", data)
//     	mongoose.connection.close();
//   	});



// // ### Add some new vampire data

// 	Vampire.create({
// 		name: 'michael weber',
// 		hair_color: 'brown',
// 		eye_color: 'green',
// 		dob: '1988-09-15',
// 		loves: ['coding','coffee'],
// 		location: 'chicago',
// 		gender: 'm',
// 		victims: 0
// 	},
// 	(err, data) => {
// 		if (err) {
// 			console.error(err);
// 		}
// 		else {
// 			console.log('added michael');
// 		}
// 	});

// 	Vampire.create({
// 		name: 'vampire2',
// 		hair_color: 'white',
// 		eye_color: 'yellow',
// 		dob: '1906-06-06',
// 		loves: ['blood','more blood'],
// 		location: 'london',
// 		gender: 'm',
// 		victims: 5000
// 	},
// 	(err, data) => {
// 		if (err) {
// 			console.error(err);
// 		}
// 		else {
// 			console.log('added vamp2');
// 		}
// 	});

// 	Vampire.create({
// 		name: 'abbie rappaport',
// 		hair_color: 'brown',
// 		eye_color: 'brown',
// 		dob: '1995-01-18',
// 		loves: ['art','videogames'],
// 		location: 'montreal',
// 		gender: 'f',
// 		victims: 1
// 	},
// 	(err, data) => {
// 		if (err) {
// 			console.error(err);
// 		}
// 		else {
// 			console.log('added abbie');
// 		}
// 	});

// 	Vampire.create({
// 		name: 'gondola brown',
// 		hair_color: 'red',
// 		eye_color: 'black',
// 		dob: '1750-10-15',
// 		loves: ['death','succulent flesh'],
// 		location: 'hell',
// 		gender: 'f',
// 		victims: 127980724
// 	},
// 	(err, data) => {
// 		if (err) {
// 			console.error(err);
// 		}
// 		else {
// 			console.log('added gondola');
// 		}
// 	});


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

	// // find all female vamps
	// Vampire.find({
	// 	gender: 'f'
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find all vamps with greater than 500 victims
	// Vampire.find({
	// 	victims: {
	// 		$gt: 500
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find all vamps with fewer or equal to 150 victims
	// Vampire.find({
	// 	victims: {
	// 		$lte: 150
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find all vamps with a victim count that is not 210234
	// Vampire.find({
	// 	victims: {
	// 		$ne: 210234
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find all vamps with greater than 150 and less than 500 victims
	// Vampire.find({
	// 	$and: [{
	// 		victims: {
	// 			$gt: 150
	// 		}
	// 	},
	// 	{
	// 		victims: {
	// 			$lt: 500
	// 		}
	// 	}]
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

	// //query vamps for existence of title property
	// Vampire.find({
	// 	title: {
	// 		$exists: true
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find vamps that do not have victims property
	// Vampire.find({
	// 	victims: {
	// 		$exists: false
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find vamps that have a title and no victims
	// Vampire.find({
	// 	$and: [{
	// 		title: {
	// 			$exists: true
	// 		}
	// 	},
	// 	{
	// 		victims: {
	// 			$exists: false
	// 		}
	// 	}
	// ]},
	// (err, data) => {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

	// //find vamps that have victims property and have greater than 1000 victims
	// Vampire.find({
	// 	$and: [{
	// 		victims: {
	// 			$exists: true
	// 		}
	// 	},
	// 	{
	// 		victims: {
	// 			$gt: 1000
	// 		}
	// 	}
	// ]},
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}
	// })

/////////////////////////////////////////////////
// ### Select with OR
	
	// find vamps with location ny ny OR nola la
	// Vampire.find({
	// 	$or: [{
	// 		location: 'New York, New York, US'
	// 	},
	// 	{
	// 		location: 'New Orleans, Louisiana, US'
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })

	//find vamps that love brooding or being tragic
	// Vampire.find({
	// 	$or: [{
	// 		loves: 'brooding'
	// 	},
	// 	{
	// 		loves: 'being tragic'
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that have 1k+ victims or love marshmallows (?)
	// Vampire.find({
	// 	$or: [{
	// 		loves: 'marshmallows'
	// 	},
	// 	{
	// 		victims: {
	// 			$gt: 1000
	// 			}
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps with green hair or red eyes
	// Vampire.find({
	// 	$or: [{
	// 		hair_color: 'red'
	// 	},
	// 	{
	// 		eye_color: 'green'
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

/////////////////////////////////////////////////
//### Select objects that match one of several values

	// //find vamps that love frilly shirtsleeves or frilly collars
	// Vampire.find({
	// 	$or: [{
	// 		loves: 'filly shirtsleeves'
	// 	},
	// 	{
	// 		loves: 'frilly collars'
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that love brooding
	// Vampire.find({
	// 	loves: 'brooding'
	// 	},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that love one of the following: fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding
	// Vampire.find({
	// 	$or: [{
	// 		loves: 'fancy cloaks'
	// 	},
	// 	{
	// 		loves: 'frilly shirtsleeves'
	// 	},
	// 	{
	// 		loves: 'appearing innocent'
	// 	},
	// 	{
	// 		loves: 'being tragic'
	// 	},
	// 	{
	// 		loves: 'brooding'
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that love fancy cloaks but not if they also love top hats or virgin blood
	// Vampire.find({
	// 	$and: [{
	// 		loves: 'fancy cloaks'
	// 	},
	// 	{
	// 		loves: {
	// 			$nin: ['top hats', 'virgin blood']
	// 		}
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

/////////////////////////////////////////////////
//### Negative Selection

	// //find vamps that love ribbons & dont have brown eyes
	// Vampire.find({
	// 	$and: [{
	// 		loves: 'ribbons'
	// 	},
	// 	{
	// 		eye_color: {
	// 			$ne: 'brown'
	// 		}
	// 	}
	// ]},
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that are not from rome
	// Vampire.find({
	// 	location: {
	// 		$ne: 'Rome'
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err)
	// 	}
	// 	else {
	// 		console.log(data)
	// 	}
	// })

	// //find vamps that do not love any of this: fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding
	// Vampire.find({
	// 	loves: {
	// 		$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']
	// 	}
	// },
	// (err, data) => {
	// 		if (err) {
	// 			console.error(err);
	// 		}
	// 		else {
	// 			console.log(data);
	// 		}	
	// })	

	// //find vamps that have not killed more than 200 people
	// Vampire.find({
	// 	victims: {
	// 		$lte: 200
	// 	}
	// },
	// (err, data) => {
	// 	if (err) {
	// 		console.error(err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 	}	
	// })	

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

	//replace the vamp 'claudia' with a vamp 'eve' with a key value pair of 'portrayed_by' and 'tilda swinton'
	Vampire.findOneAndUpdate(
	{
		name: 'Claudia'
	},
	{
		$set: {
			name: 'Eve',
			portrayed_by: 'Tilda Swinton'
		}
	},
	{
		upsert: false
	},
	(err, data) => {
		if (err) {
			console.error(err);
		}
		else {
			console.log(data);
		}
	})

	//replace the first male vampire with another whose name is 'Guy Man' and who has a key of 'is actually' with the value 'were-lizard'
	Vampire.findOneAndUpdate(
	{
		gender: 'm'
	},
	{
		$set: {
			name: "Guy Man"
			is_actually: 'were-lizard'
		}
	},
	{
		upsert: false
	},
	(err, replacedVamp) => {
		if (err) {
			console.log(err)
		} 
		else {
			console.log(replacedVamp)
		}
	})

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



})