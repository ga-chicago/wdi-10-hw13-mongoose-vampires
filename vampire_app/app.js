// 1. Require your node modules
mongoose = require("mongoose");

// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire.js")
const vampireData = require("./populateVampires.js")

// 3. Connect your database and collection name
mongoose.connect("mongodb://localhost:27017/vampires", {
	useMongoClient: true
});

// 4. Open your mongoose connection
mongoose.connection.on("connected", () => {
	console.log("Mongodb is connected")
})

mongoose.connection.on("disconnected", () => {
	console.log("Mongodb is disconnected")
})

mongoose.connection.on("error", (error) => {
	console.log("Error connecting -- ", error)
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.insertMany(,(err, data) => {
//     console.log("added provided vampire data")
//     // mongoose.connection.close();
//   });

// ### Add some new vampire data

// Vampire.create({
// 	name: "Kevin",
// 	hair_color: "black",
// 	eye_color: "blue",
// 	dob: "April 1, 1970",
// 	location: "Florida",
// 	gender: "m",
// 	victims: 10
// }, (err, createdVampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(createdVampire)
// 	}
// })

// Vampire.create({
// 	name: "Mark",
// 	hair_color: "",
// 	eye_color: "blue",
// 	dob: "January 1, 1808",
// 	location: "Florida",
// 	gender: "m",
// 	victims: 100
// }, (err, createdVampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(createdVampire)
// 	}
// })

// Vampire.create({
// 	name: "Sally",
// 	hair_color: "red",
// 	eye_color: "green",
// 	dob: "March 10, 1990",
// 	location: "Ireland",
// 	gender: "f",
// 	victims: 3
// }, (err, createdVampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(createdVampire)
// 	}
// })

// Vampire.create({
// 	name: "Sue",
// 	hair_color: "brown",
// 	eye_color: "brown",
// 	dob: "November 20, 1000",
// 	location: "Russia",
// 	gender: "f",
// 	victims: 10
// }, (err, createdVampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(createdVampire)
// 	}
// })
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// All female
// Vampire.find({ gender: "f" }, (err, foundVamp) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamp)
// 	}
// })

// At least 500 victims
// Vampire.find({ victims: { $gt: 500} }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have fewer than or equal to 150 victims

// Vampire.find({ victims: { $lte: 150} }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })


// have a victim count is not equal to 210234
// Vampire.find({ $or: [{victims: {$lt: 210234 }}, {victims: {$gt: 210234}}]}, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: { $gt: 150, $lt: 500}}, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// have a title property
// Vampire.find({ name:{ $exists: true}}, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// Vampire.find({ victims:{ $exists: false}}, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have a title AND no victims
// Vampire.find({ $and: [
// 		{name: { $exists: true}},
// 		{victims: { $exists: false}}
// 	]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have victims AND the victims they have are greater than 1000
// Vampire.find({ $and: [
// 		{victims: {$exists: true}},
// 		{victims: {$gt: 1000}}
// 	]}, (err, foundVamps) => {
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			console.log(foundVamps)
// 		}
// })	



/////////////////////////////////////////////////
// ### Select with OR

// are from New York, New York, US or New Orleans, Louisiana, US

// Vampire.find({ $or: 
// 	[ {location: "New York, New York, US"},
// 	{location: "New Orleans, Louisiana, US"}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamps)
// 	}
// })


// love brooding or being tragic

// Vampire.find({ $or:
// 	[ {loves: "brooding"},
// 	{loves: "being tragic"}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have more than 1000 victims or love marshmallows
// Vampire.find({ $or:
// 	[ {victims: {$gt: 1000}},
// 	{loves: "marshmallows"}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })


// have red hair or green eyes
// Vampire.find({ $or:
// 	[ { hair_color: "red"},
// 	{ eye_color: "green"}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })



/////////////////////////////////////////////////
//### Select objects that match one of several values

// love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or:
// 	[ {loves: "frilly shirtsleeves"},
// 	{ loves: "frilly collars"}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// love brooding
// Vampire.find({
// 	loves: "brooding"	
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({$or:
// 	[{loves: "appearing innocent"},
// 	{loves: "trickery"},
// 	{loves: "lurkingin rotting mansions"},
// 	{loves: "R&B music"}
// 	]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// love fancy cloaks but not if they also love either top hats or virgin blood
// Vampire.find({ $and:
// 	[ {loves: "fancy cloaks"},
// 	{ loves: {$nin: ["top hats", "virgin blood"]}}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })


/////////////////////////////////////////////////
//### Negative Selection

// love ribbons but do not have brown eyes
// Vampire.find({ $and:
// 	[ {loves: "ribbons"},
// 	{eye_color: {$ne: "brown"}}]
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// are not from Rome
// Vampire.find({
// 	location: {$ne: "Rome, Italy"}
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({
// 	loves: { $nin: [
// 		"fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}
// }, (err, foundVamps) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(foundVamps)
// 	}
// })

// have not killed more than 200 people
Vampire.find({
	victims: {$lte: 200}
}, (err, foundVamps) => {
	if (err) {
		console.log(err)
	} else {
		console.log(foundVamps)
	}
})



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