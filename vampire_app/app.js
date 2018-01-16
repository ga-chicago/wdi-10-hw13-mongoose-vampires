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

Vampire.create({
	name: "Kevin",
	hair_color: "black",
	eye_color: "blue",
	dob: "April 1, 1970",
	location: "Florida",
	gender: "m",
	victims: 10
}, (err, createdVampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(createdVampire)
	}
})

Vampire.create({
	name: "Mark",
	hair_color: "",
	eye_color: "blue",
	dob: "January 1, 1808",
	location: "Florida",
	gender: "m",
	victims: 100
}, (err, createdVampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(createdVampire)
	}
})

Vampire.create({
	name: "Sally",
	hair_color: "red",
	eye_color: "green",
	dob: "March 10, 1990",
	location: "Ireland",
	gender: "f",
	victims: 3
}, (err, createdVampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(createdVampire)
	}
})

Vampire.create({
	name: "Sue",
	hair_color: "brown",
	eye_color: "brown",
	dob: "November 20, 1000",
	location: "Russia",
	gender: "f",
	victims: 10
}, (err, createdVampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(createdVampire)
	}
})
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