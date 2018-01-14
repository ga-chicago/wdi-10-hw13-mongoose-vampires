// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires.js');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampires',{useMongoClient: true});

// 4. Open your mongoose connection
mongoose.connection.once('open', ()=>{
	console.log('mongoose connected');
})
mongoose.connection.on('disconnected', () => {
	console.log('disconnected mongoose');
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data");
//     mongoose.connection.close();
// });

// ### Add some new vampire data
// Vampire.create({
//   name: 'Count Sergio',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['coding','gaming'],
//   location: 'Chicago, Illinois, US',
//   gender: 'm',
//   victims: 100
// },(err,createdVamp) => {
// 	console.log(createdVamp,'vamp1 added');
// })

// Vampire.create({
//   name: 'test vampy',
//   hair_color: 'green',
//   eye_color: 'purple',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['stuff','nothing'],
//   location: 'Chicago, Illinois, US',
//   gender: 'm',
//   victims: 1090
// },(err,createdVamp) => {
// 	console.log(createdVamp,'2');
// })

// Vampire.create({
//   name: 'Emma',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['school','tv'],
//   location: 'Chicago, Illinois, US',
//   gender: 'f',
//   victims: 1020
// },(err,createdVamp) => {
// 	console.log(createdVamp, '3');
// })

// Vampire.create({
//   name: 'Jasmine',
//   hair_color: 'black',
//   eye_color: 'red',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['stuff','make-up'],
//   location: 'Chicago, Illinois, US',
//   gender: 'f',
//   victims: 1400
// },(err,createdVamp) => {
// 	console.log(createdVamp,'vamp4 added');
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $gt: 500 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $lte: 150 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $ne: 210234 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{victims: { $gt: 150 }},{victims: { $lt: 500 }}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title:{$exists: true}},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims:{$exists: false}},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{title:{$exists: true}},{victims:{$exists: false}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{victims:{$exists: true}},{victims:{$gt: 1000}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{loves:'marshmallows'},{victims:{$gt: 1000}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{hair_color:'red'},{eye_color:"green"}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

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