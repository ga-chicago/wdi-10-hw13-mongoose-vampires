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

// // dude1
//  { _id: 5a5a71440a0d8409165658d7,
//     name: 'Marcelle',
//     eye_color: 'black',
//     dob: 1000-02-15T00:00:00.000Z,
//     location: 'Washington DC, US',
//     gender: 'm',
//     victims: 1,
//     __v: 0,
//     loves: [ 'the color red', 'rock music' ],
//     hair_color: '' }
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
// love ribbons but do not have brown eyes
// Vampire.find({
// 	$and: [{loves: {$in: ['ribbons']}}, {eye_color: {$ne: 'brown'}}]
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// are not from Rome
// Vampire.find({
// 	location: {$ne: 'Rome, Italy'}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({
// 	loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// have not killed more than 200 people
// Vampire.find({
// 	victims: {$lte: 200}
// 	}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.update(
// 	{name: 'Claudia'},
// 	{
//      $set: { name: 'Eve' },
//      $setOnInsert: { portrayed_by: 'Tilda Swinton' }
//   	},
//   	{ upsert: true },
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	})

// Vampire.vampires.update(
// 	{name: 'Eve'},
// 	{ $set: { portrayed_by: 'Tilda Swinton' }},
// 	{upsert: true },
// 		// console.log(vampire);
// 		mongoose.connection.close());

// Vampire.find({name: 'Eve'}, (err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();})

// Ok, at this point I got fed up with it not adding the portrayed_by key and gave up for now.

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
// 	{gender: 'm'},
// 	{
//      $set: { name: 'Guy Man', is_actually: 'were-lizard' }
//   	},
// 	{ upsert: true },
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
	// })
// same here, couldn't get is_actually to show up 

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man'},
// 	{ $set: { gender: 'f'} },
// 	{ new: true},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })

// Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate(
// 	{ name: 'Eve'},
// 	{ $set: { gender: 'm'} },
// 	{ new: true},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man'},
// 	{ $set: { hates: ['clothes', 'jobs']} },
// 	{ upsert: true, new: true  },
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })
// once again this didn't work, but I'm struggling figuring out why and running out of time.

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man'},
// 	{ $push: { hates: { $each: ['clothes', 'jobs'] } } },
// 	{upsert: true, new : true},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })
// I think this is right but it didn't work

// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
// 	{ name: 'Eve'},
// 	{ $rename: {'name' : 'moniker'} },
// 	{ new : true},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.update(
// 	{ gender: 'f'},
// 	{ $set: { gender: 'fems'} },
// 	{ multi: true },
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove(
// 	{hair_color: 'brown'},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	}
// )

// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.remove(
// 	{eye_color: 'blue'},
// 	(err, vampire) => {
// 		console.log(vampire);
// 		mongoose.connection.close();
// 	}
// )

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////